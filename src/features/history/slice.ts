import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHistoryState } from './interface'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: IHistoryState = {
  routerHistory: [],
  currentRoute: 0
}

const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    initialize(state, action: PayloadAction<string>) {
      state.routerHistory = [action.payload]
    },
    updateHistory(state, action: PayloadAction<string>) {
      state.currentRoute = state.routerHistory.length
      state.routerHistory = [...state.routerHistory, action.payload]
    },
    increment(state) {
      state.currentRoute = ++state.currentRoute
    },
    decrement(state) {
      state.currentRoute = --state.currentRoute
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
