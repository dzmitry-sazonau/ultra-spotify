import { api } from '../../core/store/api'
import { IUser, TUserType } from './interface'

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
      providesTags: ['UserFollowing']
    }),
    checkIfUserFollows: builder.query<
      boolean[],
      { type: TUserType; ids: string[] }
    >({
      query: (arg) => ({
        url: '/me/following/contains',
        method: 'GET',
        params: { ...arg },
      }),
      providesTags: ['UserFollowing']
    }),
    followArtistOrUser: builder.mutation<
      void,
      { type: TUserType; ids: string[] }
    >({
      query: (arg) => ({
        url: '/me/following',
        method: 'PUT',
        params: { ...arg },
      }),
      invalidatesTags: ['UserFollowing']
    }),
    unfollowArtistOrUser: builder.mutation<
      void,
      { type: TUserType; ids: string[] }
      >({
      query: (arg) => ({
        url: '/me/following',
        method: 'DELETE',
        params: { ...arg },
      }),
      invalidatesTags: ['UserFollowing']
    }),
    getUserProfileById: builder.query<IUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET',
      }),
      providesTags: ['UserFollowing']
    }),
  }),
})

export const {
  useGetCurrentUserProfileQuery,
  useFollowArtistOrUserMutation,
  useUnfollowArtistOrUserMutation,
  useGetUserProfileByIdQuery,
  useCheckIfUserFollowsQuery,
} = userApi

export const { getCurrentUserProfile } = userApi.endpoints

export default userApi
