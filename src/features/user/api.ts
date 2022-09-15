import { api } from '../../core/store/api'
import { IUser } from './interface'

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUserProfile: builder.query<IUser, void>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetCurrentUserProfileQuery } = userApi

export const { getCurrentUserProfile } = userApi.endpoints

export default userApi
