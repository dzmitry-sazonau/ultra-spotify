import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHistoryState } from './interface'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IHistoryState = {
  routerHistory: [],
  currentRoute: 0,
  isChangeFromHeader: false,
}

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    initialize(state, action: PayloadAction<string>) {
      state.routerHistory = [action.payload]
    },
    updateHistory(state, action: PayloadAction<string>) {
      if (!state.isChangeFromHeader) {
        state.currentRoute = state.routerHistory.length
        state.routerHistory = [...state.routerHistory, action.payload]
      } else {
        state.isChangeFromHeader = false
      }
    },
    increment(state) {
      state.currentRoute = ++state.currentRoute
      state.isChangeFromHeader = true
    },
    decrement(state) {
      state.currentRoute = --state.currentRoute
      state.isChangeFromHeader = true
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.history,
      }
    },
  },
})

const { reducer, actions } = history

export const { updateHistory, decrement, increment, initialize } = actions

export default reducer
