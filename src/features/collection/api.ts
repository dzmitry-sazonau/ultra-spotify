import { api } from '../../core/store/api'
import {
  IRequestCollectionParams,
  IResponseAlbumsInfo,
  IResponsePlaylistsInfo,
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
    getPlaylistByUserId: builder.query<IResponsePlaylistsInfo, IRequestCollectionParams & {id: IUser['id']}>({
      query: ({ id, offset, limit }) => ({
        url: `/users/${id}/playlists`,
        method: 'GET',
        params: { offset, limit },
      })
    })
  }),
})

export const {
  useGetCurrentUserPlaylistsQuery,
  useGetCurrentUserAlbumsQuery,
  useGetPlaylistByUserIdQuery,
  util: { getRunningOperationPromises },
} = collectionApi

export const { getCurrentUserPlaylists, getCurrentUserAlbums } =
  collectionApi.endpoints

export default collectionApi
