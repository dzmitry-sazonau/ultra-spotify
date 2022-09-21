import { RootState } from '../../core/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectHistoryState = (state: RootState) => state.history

export const selectRouterHistory = createSelector(
  selectHistoryState,
  (history) => history.routerHistory
)

export const selectCurrentRoute = createSelector(
  selectHistoryState,
  (history) => history.currentRoute
)

export const selectRouterHistoryLength = createSelector(
  selectRouterHistory,
  (routerHistory) => routerHistory.length
)

export const selectIsDisabledBackButton = createSelector(
  selectCurrentRoute,
  selectRouterHistoryLength,
  (currentRoute, length) => length === 0 || currentRoute === 0
)

export const selectIsDisabledForwardButton = createSelector(
  selectCurrentRoute,
  selectRouterHistoryLength,
  (currentRoute, length) => !(length - 1 > currentRoute)
)

export const selectForwardRoute = createSelector(
  selectCurrentRoute,
  selectRouterHistory,
  (currentRoute, routerHistory) => routerHistory.at(currentRoute + 1) || '/'
)

export const selectBackRoute = createSelector(
  selectCurrentRoute,
  selectRouterHistory,
  (currentRoute, routerHistory) => routerHistory.at(currentRoute - 1) || '/'
)
