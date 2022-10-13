import { RootState } from '../../core/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectClientState = (state: RootState) => state.user

export const selectCurrentUser = createSelector(
  selectClientState,
  (user) => user.currentUser
)