import { RootState } from '../../core/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectAuthState = (state: RootState) => state.auth

export const selectIsAuthorized = createSelector(
  selectAuthState,
  (auth) => auth.authData.access_token
)
