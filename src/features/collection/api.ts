import { api } from '../../core/store/api'
import { IRequestCollectionParams, IResponseAlbumsInfo, IResponsePlaylistsInfo } from './interface'

const collectionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserPlaylists: builder.query<IResponsePlaylistsInfo, IRequestCollectionParams>({
      query: (arg) => ({
        url: '/me/playlists',
        method: 'GET',
        params: { ...arg },
      }),
    }),
    getCurrentUserAlbums: builder.query<IResponseAlbumsInfo, IRequestCollectionParams>({
      query: (arg) => ({
        url: '/me/albums',
        method: 'GET',
        params: { ...arg },
      }),
    }),
  }),
})

export const { useGetCurrentUserPlaylistsQuery, useGetCurrentUserAlbumsQuery } = collectionApi

export default collectionApi
