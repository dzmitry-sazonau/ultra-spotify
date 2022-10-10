import { useCallback, useRef, useState } from 'react'
import { useResizeObserver } from '../../core/hook'
import { middleSizeCard } from './contstans'
import {
  useCheckUserFollowAlbumQuery,
  useCheckUserFollowPlaylistQuery,
  useCheckUserSavedTracksQuery, useFollowAlbumMutation,
  useFollowPlaylistMutation,
  useRemoveTracksForCurrentUserMutation,
  useSaveTracksForCurrentUserMutation, useUnfollowAlbumMutation,
  useUnfollowPlaylistMutation
} from './api'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../core/store/hook'
import { selectCurrentUser } from '../user/selector'

export function useDynamicWidth() {
  const [columCount, setColumCount] = useState(0)
  const [gap, setGap] = useState(24)
  const ref = useRef<HTMLDivElement>(null)

  useResizeObserver(ref, (entries) => {
    const cardWithGap = middleSizeCard + gap
    const containerWidth = entries[0].target.clientWidth

    setColumCount(Math.round(containerWidth / cardWithGap))

    if (columCount <= 3) {
      setGap(16)
    }
  })

  return {
    columCount,
    gap,
    ref,
  }
}

export function useCheckSavedTrack(ids?: string[]) {
  const { data: savedTrackIds } = useCheckUserSavedTracksQuery(ids!, {
    skip: !ids,
  })

  return useCallback(
    (index: number) => !!(savedTrackIds && savedTrackIds[index]),
    [savedTrackIds]
  )
}

export function usePlaylistFollow() {
  const { query } = useRouter()
  const { id } = useAppSelector(selectCurrentUser)
  const { data } = useCheckUserFollowPlaylistQuery({
    ids: [id],
    playlistId: query.id as string,
  })
  const isFollowed = data?.at(0)

  const [follow] = useFollowPlaylistMutation()
  const [unfollow] = useUnfollowPlaylistMutation()

  return {
    isFollowed,
    action: () => (isFollowed ? unfollow : follow)(query.id as string),
  }
}

export function useAlbumFollow() {
  const { query } = useRouter()
  const { data } = useCheckUserFollowAlbumQuery([query.id as string])
  const isFollowed = data?.at(0)

  const [follow] = useFollowAlbumMutation()
  const [unfollow] = useUnfollowAlbumMutation()

  return {
    isFollowed,
    action: () => (isFollowed ? unfollow : follow)(query.id as string),
  }
}

export function useTrackFollowAction(isSaved: boolean, ids: string[]) {
  const [save] = useSaveTracksForCurrentUserMutation()
  const [remove] = useRemoveTracksForCurrentUserMutation()

  return () => (isSaved ? remove : save)(ids)
}
