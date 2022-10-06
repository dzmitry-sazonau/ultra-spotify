import { useRef, useState } from 'react'
import { useResizeObserver } from '../../core/hook'
import { middleSizeCard } from './contstans'
import {
  useCheckUserFollowPlaylistQuery,
  useCheckUserSavedTracksQuery,
  useFollowPlaylistMutation,
  useGetPlaylistItemsQuery,
  useRemoveTracksForCurrentUserMutation,
  useSaveTracksForCurrentUserMutation,
  useUnfollowPlaylistMutation
} from './api'
import { IResponsePlaylistTrackInfo } from './interface'
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

export function useGetPlaylistItemsData(id: string) {
  const tracksInfo = useGetPlaylistItemsQuery({
    id,
    offset: 0,
    limit: 50,
  })

  const { data: savedTrackIds, isSuccess } = useCheckUserSavedTracksQuery(
    tracksInfo.data?.items.map((trackInfo) => trackInfo.track.id)!,
    { skip: !tracksInfo.isSuccess }
  )

  if (!isSuccess) {
    return {
      isSuccess,
      data: undefined,
    }
  }

  return {
    isSuccess,
    data: ({
      ...tracksInfo.data!,
      items: tracksInfo.data!.items.map((trackInfo, index) => ({
        ...trackInfo,
        isSaved: savedTrackIds[index],
      }))
    } as IResponsePlaylistTrackInfo ),
  }
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

export function useTrackFollowAction(isSaved: boolean, ids: string[]) {
  const [save] = useSaveTracksForCurrentUserMutation()
  const [remove] = useRemoveTracksForCurrentUserMutation()

  return () => (isSaved ? remove : save)(ids)
}

