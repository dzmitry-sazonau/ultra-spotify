import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from './index'
import { destroyAuthData, setAccessToken } from '../../features/auth/slice'
import { setCookie, destroyCookie } from 'nookies'
import { IAuthData } from '../../features/auth/interface'

const baseUrl = process.env.SPOTIFY_URL || 'https://api.spotify.com/v1'

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.authData.access_token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryForApi = fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' })

const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const authData = (api.getState() as RootState).auth.authData

    const { data, meta } = await baseQueryForApi(
      {
        url: '/auth/refresh_token',
        params: { refresh_token: authData.refresh_token },
      },
      api,
      extraOptions
    )

    const { expires_in, access_token } = data as IAuthData

    if (data) {
      api.dispatch(setAccessToken(access_token))

      setCookie({ res: meta!.response }, 'token', JSON.stringify({ ...authData, access_token }), {
        expires: expires_in,
        path: '/',
      })

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(destroyAuthData())
      destroyCookie({ res: meta!.response }, 'token')
    }
  }

  return result
}

export const api = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: 5,
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    'UserFollowing',
    'PlaylistFollowing',
    'TrackSaving',
    'AlbumFollowing',
  ],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
})
