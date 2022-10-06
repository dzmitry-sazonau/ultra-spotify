import { api } from '../../core/store/api'
import {
  IPlaylist,
  IRequestCollectionParams,
  IResponseAlbumsInfo,
  IResponsePlaylist,
  IResponsePlaylistsInfo,
  IResponsePlaylistTrackInfo,
} from './interface'
import { IUser, TUserType } from '../user/interface'

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
      IResponseAlbumsInfo,
      IRequestCollectionParams
    >({
      query: (arg) => ({
        url: '/me/albums',
        method: 'GET',
        params: { ...arg },
      }),
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
    checkUserSavedTracks: builder.query<boolean[], string[]>({
      query: (ids) => ({
        url: `/me/tracks/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
      providesTags: ['TrackSaving']
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
    }),
    unfollowPlaylist: builder.mutation<void, string>({
      query: (id) => ({
        url: `/playlists/${id}/followers`,
        method: 'DELETE',
      }),
      invalidatesTags: ['PlaylistFollowing'],
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
  util: { getRunningOperationPromises },
} = collectionApi

export const { getCurrentUserPlaylists, getCurrentUserAlbums } =
  collectionApi.endpoints

export default collectionApi
