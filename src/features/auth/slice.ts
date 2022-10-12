import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthData, IAuthState, IRefreshToken } from './interface'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IAuthState = {
  authData: {} as IAuthData & IRefreshToken,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IAuthData & IRefreshToken>) {
      state.authData = action.payload
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.authData.access_token = action.payload
    },
    destroyAuthData(state) {
      state.authData = {} as IAuthData & IRefreshToken
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      }
    },
  },
})

const { reducer, actions } = auth

export const { setAuthData, setAccessToken, destroyAuthData } = actions

export default reducer
