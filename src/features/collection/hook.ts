import { useRef, useState } from 'react'
import { useResizeObserver } from '../../core/hook'
import { middleSizeCard } from './contstans'
import { useCheckUserSavedTracksQuery, useGetPlaylistItemsQuery } from './api'
import { IResponseTrackInfo } from './interface'

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
    { ids: tracksInfo.data?.items.map((trackInfo) => trackInfo.track.id)! },
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
    data: {
      ...tracksInfo.data!,
      items: tracksInfo.data!.items.map((trackInfo, index) => ({
        ...trackInfo,
        isSaved: savedTrackIds[index],
      }))
    },
  }
}
