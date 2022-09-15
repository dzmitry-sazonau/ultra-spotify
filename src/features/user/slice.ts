import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from './interface'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IUserState = {
  currentUser: {} as IUser,
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<IUser>) {
      state.currentUser = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      }
    },
  },
})

const { reducer, actions } = user

export const { setCurrentUser } = actions

export default reducer
