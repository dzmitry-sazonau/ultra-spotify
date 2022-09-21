import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../core/store/hook'
import {
  selectBackRoute,
  selectForwardRoute,
  selectIsDisabledBackButton,
  selectIsDisabledForwardButton,
} from './selectors'
import { useCallback, useEffect } from 'react'
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
    router.push(backRoute, undefined, { shallow: true })
  }, [dispatch, router, backRoute])

  const handleGoForward = useCallback(() => {
    dispatch(increment())
    router.push(forwardRoute, undefined, { shallow: true })
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
  const dispatch = useAppDispatch()

  useEffect(() => {
    const routeChangeComplete = (url: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        dispatch(updateHistory(url))
      }
    }

    router.events.on('routeChangeComplete', routeChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete)
    }
  }, [])
}
