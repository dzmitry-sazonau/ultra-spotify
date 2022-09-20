import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '../../core/store/hook'
import {
  selectBackRoute,
  selectForwardRoute,
  selectIsDisabledBackButton,
  selectIsDisabledForwardButton
} from './selectors'
import { useCallback } from 'react'
import { decrement, increment } from './slice'

export function useHistory() {
  const router = useRouter()
  const dispatch = useAppDispatch();

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
    isDisabledForward
  }
}