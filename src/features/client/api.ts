import { api } from '../../core/store/api'
import { IResponseFollowedArtists, IUser, TClientType } from './entity'
import { IRequestCollectionParams } from '../../core/entity'

const clientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      providesTags: ['UserFollowing'],
    }),
    checkIfUserFollows: builder.query<
      boolean[],
      { type: TClientType; ids: string[] }
    >({
      query: (arg) => ({
        url: '/me/following/contains',
        method: 'GET',
        params: { ...arg },
      }),
      providesTags: ['UserFollowing'],
    }),
    followArtistOrUser: builder.mutation<
      void,
      { type: TClientType; ids: string[] }
    >({
      query: (arg) => ({
        url: '/me/following',
        method: 'PUT',
        params: { ...arg },
      }),
      invalidatesTags: ['UserFollowing'],
    }),
    unfollowArtistOrUser: builder.mutation<
      void,
      { type: TClientType; ids: string[] }
    >({
      query: (arg) => ({
        url: '/me/following',
        method: 'DELETE',
        params: { ...arg },
      }),
      invalidatesTags: ['UserFollowing'],
    }),
    getUserProfileById: builder.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: ['UserFollowing'],
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
    }),
  }),
})

export const {
  useGetFollowedArtistsQuery,
  useFollowArtistOrUserMutation,
  useUnfollowArtistOrUserMutation,
  useGetUserProfileByIdQuery,
  useCheckIfUserFollowsQuery,
} = clientApi

export const { getCurrentUserProfile } = clientApi.endpoints

export default clientApi
