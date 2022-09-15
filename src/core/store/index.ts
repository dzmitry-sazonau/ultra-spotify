import { configureStore } from '@reduxjs/toolkit'
import { createWrapper, Context } from 'next-redux-wrapper'
import { api } from './api'
import user from '../../features/user/slice'
import auth from '../../features/auth/slice'

export const makeStore = (ctx: Context) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      user,
      auth
    },
    middleware: (gDM) =>
      gDM({
        thunk: {
          extraArgument: ctx,
        },
        serializableCheck: false,
      }).concat(api.middleware),
  })

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = RootStore['dispatch']

export const wrapper = createWrapper<RootStore>(makeStore)
