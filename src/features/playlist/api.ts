import { api } from '../../core/store/api'
import {
  IPlaylist,
  IPlaylistWithShortTrack,
  IResponsePlaylist,
  IResponsePlaylistsInfo,
} from './entity'
import { IUser } from '../client/entity'
import { IRequestCollectionParams } from '../../core/entity'

const playlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserPlaylists: builder.query<
      IResponsePlaylistsInfo,
      IRequestCollectionParams
    >({
      query: (arg) => ({
        url: '/me/playlists',
        method: 'GET',
        params: { ...arg },
      }),
      providesTags: ['PlaylistFollowing'],
    }),
    getPlaylistByUserId: builder.query<
      IResponsePlaylistsInfo,
      IRequestCollectionParams & { id: IUser['id'] }
    >({
      query: ({ id, offset, limit }) => ({
        url: `/users/${id}/playlists`,
        method: 'GET',
        params: { offset, limit },
      }),
    }),
    getPlaylist: builder.query<IResponsePlaylist, IPlaylist['id']>({
      query: (id) => ({
        url: `/playlists/${id}`,
        method: 'GET',
        params: {
          market: 'BY',
          fields:
            'collaborative,description,href,id,images,name,owner,primary_color,public,snapshot_id,type,uri,external_urls,followers,tracks.total',
        },
      }),
    }),
    checkUserFollowPlaylist: builder.query<
      boolean[],
      { ids: string[]; playlistId: string }
    >({
      query: ({ ids, playlistId }) => ({
        url: `/playlists/${playlistId}/followers/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
      providesTags: ['PlaylistFollowing'],
    }),
    followPlaylist: builder.mutation<void, string>({
      query: (id) => ({
        url: `/playlists/${id}/followers`,
        method: 'PUT',
        body: {
          public: true,
        },
      }),
      invalidatesTags: ['PlaylistFollowing'],
      onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        const state = getState()

        const checkUserFollowPlaylistResult = dispatch(
          playlistApi.util.updateQueryData(
            'checkUserFollowPlaylist',
            // @ts-ignore
            { ids: [state.user!.currentUser.id!], playlistId: id },
            (draft) => {
              Object.assign(draft, [true])
            }
          )
        )

        const { data: playlist } =
          playlistApi.endpoints.getPlaylist.select(id)(state)

        const getCurrentUserPlaylists = dispatch(
          playlistApi.util.updateQueryData(
            'getCurrentUserPlaylists',
            { limit: 50, offset: 0 },
            (draft) => {
              draft.items.unshift({
                id: playlist?.id!,
                name: playlist?.name!,
              } as IPlaylistWithShortTrack)
            }
          )
        )

        queryFulfilled.catch(() => {
          checkUserFollowPlaylistResult.undo()
          getCurrentUserPlaylists.undo()
        })
      },
    }),
    unfollowPlaylist: builder.mutation<void, string>({
      query: (id) => ({
        url: `/playlists/${id}/followers`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PlaylistFollowing'],
      onQueryStarted(id, { dispatch, queryFulfilled, getState }) {
        const state = getState()

        const checkUserFollowPlaylistResult = dispatch(
          playlistApi.util.updateQueryData(
            'checkUserFollowPlaylist',
            // @ts-ignore
            { ids: [state.user!.currentUser.id!], playlistId: id },
            (draft) => {
              Object.assign(draft, [false])
            }
          )
        )

        const getCurrentUserPlaylists = dispatch(
          playlistApi.util.updateQueryData(
            'getCurrentUserPlaylists',
            { limit: 50, offset: 0 },
            (draft) => {
              draft.items = draft.items.filter((item) => item.id !== id)
            }
          )
        )

        queryFulfilled.catch(() => {
          checkUserFollowPlaylistResult.undo()
          getCurrentUserPlaylists.undo()
        })
      },
    }),
  }),
})

export const {
  useGetCurrentUserPlaylistsQuery,
  useGetPlaylistByUserIdQuery,
  useGetPlaylistQuery,
  useCheckUserFollowPlaylistQuery,
  useFollowPlaylistMutation,
  useUnfollowPlaylistMutation
} = playlistApi

export const { getCurrentUserPlaylists } = playlistApi.endpoints

export default playlistApi
