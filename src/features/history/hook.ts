import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../core/store/hook'
import {
  selectBackRoute, selectCurrentRoute,
  selectForwardRoute,
  selectIsDisabledBackButton,
  selectIsDisabledForwardButton, selectRouterHistoryLength
} from './selectors'
import { useCallback, useEffect, useRef, useState } from 'react'
import { decrement, increment, initialize, updateHistory } from './slice'

export function useHistory() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const isDisabledBack = useAppSelector(selectIsDisabledBackButton)
  const isDisabledForward = useAppSelector(selectIsDisabledForwardButton)
  const forwardRoute = useAppSelector(selectForwardRoute)
  const backRoute = useAppSelector(selectBackRoute)

  const handleGoBack = useCallback(() => {
    dispatch(decrement())
 
    router.push(backRoute)
  }, [dispatch, router, backRoute])

  const handleGoForward = useCallback(() => {
    dispatch(increment())
    router.push(forwardRoute)
  }, [dispatch, router, forwardRoute])

  return {
    back: handleGoBack,
    forward: handleGoForward,
    isDisabledBack,
    isDisabledForward,
  }
}

export function useInitializeHistory() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initialize(router.asPath))
  }, [])
}

export function useAttachedEventsForRouter() {
  const router = useRouter()
  const [isUpdateHistory, setIsUpdateHistory] = useState(true)
  const currentRoute = useAppSelector(selectCurrentRoute)
  const routerHistoryLength =  useAppSelector(selectRouterHistoryLength)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsUpdateHistory(false)
  }, [currentRoute])

  useEffect(() => {
    setIsUpdateHistory(true)
  }, [routerHistoryLength])

  const routeChangeComplete = (url: string) => {
    if (isUpdateHistory) {
      dispatch(updateHistory(url))
    }
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [routeChangeComplete])
}
