import { api } from '../../core/store/api'
import {
  IPlaylist,
  IRequestCollectionParams,
  IResponseAlbumsInfo,
  IResponsePlaylistsInfo, IResponseTrackInfo
} from './interface'
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
    getPlaylistItems: builder.query<
      IResponseTrackInfo,
      IRequestCollectionParams & { id: IPlaylist['id'] }
    >({
      query: ({ id, offset, limit }) => ({
        url: `/playlists/${id}/tracks`,
        method: 'GET',
        params: { offset, limit, market: 'BY' },
      }),
    }),
    checkUserSavedTracks: builder.query<boolean[], {ids: string[]}>({
      query: ({ ids }) => ({
        url: `/me/tracks/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
    })
  }),
})

export const {
  useGetCurrentUserPlaylistsQuery,
  useGetCurrentUserAlbumsQuery,
  useGetPlaylistByUserIdQuery,
  useGetPlaylistItemsQuery,
  useCheckUserSavedTracksQuery,
  util: { getRunningOperationPromises },
} = collectionApi

export const { getCurrentUserPlaylists, getCurrentUserAlbums, getPlaylistItems } =
  collectionApi.endpoints

export default collectionApi
