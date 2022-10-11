import { api } from '../../core/store/api'
import {
  IAlbum,
  IArtist,
  IPlaylist,
  IPlaylistWithShortTrack,
  IRequestCollectionParams,
  IResponseAlbum,
  IResponseCurrentUserAlbums,
  IResponseAlbumTrackInfo,
  IResponseArtistAlbum,
  IResponsePlaylist,
  IResponsePlaylistsInfo,
  IResponsePlaylistTrackInfo, IResponseCurrentUserAlbumsPrepared, IResponseFollowedArtists
} from './entity'
import { IUser } from '../user/interface'

const collectionApi = api.injectEndpoints({
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
    getCurrentUserAlbums: builder.query<
      IResponseCurrentUserAlbumsPrepared,
      IRequestCollectionParams
    >({
      query: (arg) => ({
        url: '/me/albums',
        method: 'GET',
        params: { ...arg },
      }),
      transformResponse: (response: IResponseCurrentUserAlbums) => {
        return {
          ...response,
          items: response?.items.map(({ album }) => ({
            ...album,
          })),
        }
      },
    }),
    getFollowedArtists: builder.query<
      IResponseFollowedArtists,
      IRequestCollectionParams['limit']
      >({
      query: (limit) => ({
        url: '/me/following',
        method: 'GET',
        params: { type: 'artist', limit },
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
    getAlbum: builder.query<IResponseAlbum, IAlbum['id']>({
      query: (id) => ({
        url: `/albums/${id}`,
        method: 'GET',
        params: {
          market: 'BY',
        },
      }),
    }),
    getPlaylistItems: builder.query<
      IResponsePlaylistTrackInfo,
      IRequestCollectionParams & { id: IPlaylist['id'] }
    >({
      query: ({ id, offset, limit }) => ({
        url: `/playlists/${id}/tracks`,
        method: 'GET',
        params: { offset, limit, market: 'BY' },
      }),
    }),
    getAlbumItems: builder.query<
      IResponseAlbumTrackInfo,
      IRequestCollectionParams & { id: IAlbum['id'] }
    >({
      query: ({ id, offset, limit }) => ({
        url: `/albums/${id}/tracks`,
        method: 'GET',
        params: { offset, limit, market: 'BY' },
      }),
    }),
    checkUserSavedTracks: builder.query<boolean[], string[]>({
      query: (ids) => ({
        url: `/me/tracks/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
      providesTags: ['TrackSaving'],
    }),
    saveTracksForCurrentUser: builder.mutation<void, string[]>({
      query: (ids) => ({
        url: `/me/tracks`,
        method: 'PUT',
        params: { ids },
      }),
      invalidatesTags: ['TrackSaving'],
    }),
    removeTracksForCurrentUser: builder.mutation<void, string[]>({
      query: (ids) => ({
        url: `/me/tracks`,
        method: 'DELETE',
        params: { ids },
      }),
      invalidatesTags: ['TrackSaving'],
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
          collectionApi.util.updateQueryData(
            'checkUserFollowPlaylist',
            // @ts-ignore
            { ids: [state.user!.currentUser.id!], playlistId: id },
            (draft) => {
              Object.assign(draft, [true])
            }
          )
        )

        const { data: playlist } =
          collectionApi.endpoints.getPlaylist.select(id)(state)

        const getCurrentUserPlaylists = dispatch(
          collectionApi.util.updateQueryData(
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
          collectionApi.util.updateQueryData(
            'checkUserFollowPlaylist',
            // @ts-ignore
            { ids: [state.user!.currentUser.id!], playlistId: id },
            (draft) => {
              Object.assign(draft, [false])
            }
          )
        )

        const getCurrentUserPlaylists = dispatch(
          collectionApi.util.updateQueryData(
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
    checkUserFollowAlbum: builder.query<boolean[], string[]>({
      query: (ids) => ({
        url: `/me/albums/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
      providesTags: ['AlbumFollowing'],
    }),
    followAlbum: builder.mutation<void, string>({
      query: (id) => ({
        url: '/me/albums',
        method: 'PUT',
        params: { ids: [id] },
      }),
      invalidatesTags: ['AlbumFollowing'],
    }),
    unfollowAlbum: builder.mutation<void, string>({
      query: (id) => ({
        url: '/me/albums',
        method: 'DELETE',
        params: { ids: [id] },
      }),
      invalidatesTags: ['AlbumFollowing'],
    }),
    getArtistAlbums: builder.query<
      IResponseArtistAlbum,
      IRequestCollectionParams & { id: IArtist['id'] }
    >({
      query: ({ id, ...args }) => ({
        url: `artists/${id}/albums`,
        method: 'GET',
        params: {
          market: 'BY',
          ...args,
        },
      }),
    }),
  }),
})

export const {
  useGetCurrentUserPlaylistsQuery,
  useGetCurrentUserAlbumsQuery,
  useGetPlaylistByUserIdQuery,
  useGetPlaylistItemsQuery,
  useCheckUserSavedTracksQuery,
  useSaveTracksForCurrentUserMutation,
  useRemoveTracksForCurrentUserMutation,
  useGetPlaylistQuery,
  useCheckUserFollowPlaylistQuery,
  useFollowPlaylistMutation,
  useUnfollowPlaylistMutation,
  useGetAlbumItemsQuery,
  useGetAlbumQuery,
  useCheckUserFollowAlbumQuery,
  useFollowAlbumMutation,
  useUnfollowAlbumMutation,
  useGetArtistAlbumsQuery,
  useGetFollowedArtistsQuery,
  util: { getRunningOperationPromises },
} = collectionApi

export const { getCurrentUserPlaylists, getCurrentUserAlbums } =
  collectionApi.endpoints

export default collectionApi
