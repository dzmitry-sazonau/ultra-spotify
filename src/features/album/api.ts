import { api } from '../../core/store/api'
import {
  IAlbum,
  IResponseAlbum,
  IResponseCurrentUserAlbums,
  IResponseArtistAlbum,
  IResponseCurrentUserAlbumsPrepared
} from './entity'
import { IRequestCollectionParams } from '../../core/entity'
import { IArtist } from '../client/entity'

const albumApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    getAlbum: builder.query<IResponseAlbum, IAlbum['id']>({
      query: (id) => ({
        url: `/albums/${id}`,
        method: 'GET',
        params: {
          market: 'BY',
        },
      }),
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
  useGetCurrentUserAlbumsQuery,
  useGetAlbumQuery,
  useCheckUserFollowAlbumQuery,
  useFollowAlbumMutation,
  useUnfollowAlbumMutation,
  useGetArtistAlbumsQuery,
} = albumApi

export const {} = albumApi.endpoints

export default albumApi
