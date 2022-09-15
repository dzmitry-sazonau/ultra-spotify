import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthData, IAuthState } from './interface'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IAuthState = {
  authData: {} as IAuthData,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IAuthData>) {
      state.authData = action.payload
    },
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

export const { setAuthData } = actions

export default reducer
