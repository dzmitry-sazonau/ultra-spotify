import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../core/store/hook'
import {
  selectBackRoute,
  selectForwardRoute,
  selectIsDisabledBackButton,
  selectIsDisabledForwardButton,
} from './selectors'
import { useCallback, useEffect, useState } from 'react'
import { decrement, increment, initialize, updateHistory } from './slice'
import { addListener, clearAllListeners, isAnyOf } from '@reduxjs/toolkit'

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
  const dispatch = useAppDispatch()

  const routeChangeComplete = (url: string) => {
    if (isUpdateHistory) {
      dispatch(updateHistory(url))
    }
    setIsUpdateHistory(true)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [routeChangeComplete])

  useEffect(() => {
    dispatch(addListener({
      matcher: isAnyOf(increment, decrement),
      effect: () => setIsUpdateHistory(false)
    }))

    return () => {
      dispatch(clearAllListeners())
    }
  }, [])
}
