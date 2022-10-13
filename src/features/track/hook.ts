import { useCallback } from 'react'
import {
  useCheckUserSavedTracksQuery,
  useRemoveTracksForCurrentUserMutation,
  useSaveTracksForCurrentUserMutation,
} from './api'

export function useCheckSavedTrack(ids?: string[]) {
  const { data: savedTrackIds } = useCheckUserSavedTracksQuery(ids!, {
    skip: !ids,
  })

  return useCallback(
    (index: number) => !!(savedTrackIds && savedTrackIds[index]),
    [savedTrackIds]
  )
}

export function useTrackFollowAction(isSaved: boolean, ids: string[]) {
  const [save] = useSaveTracksForCurrentUserMutation()
  const [remove] = useRemoveTracksForCurrentUserMutation()

  return () => (isSaved ? remove : save)(ids)
}
