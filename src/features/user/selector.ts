import { RootState } from '../../core/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectUserState = (state: RootState) => state.user

export const selectCurrentUser = createSelector(
  selectUserState,
  (user) => user.currentUser
)