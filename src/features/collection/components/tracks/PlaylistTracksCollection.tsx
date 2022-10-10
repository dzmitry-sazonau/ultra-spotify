import React, { FC } from 'react'
import { useCheckSavedTrack } from '../../hook'
import { useRouter } from 'next/router'
import PlaylistTracksTable from './PlaylistTracksTable'
import { useGetPlaylistItemsQuery } from '../../api'

const PlaylistTracksCollection: FC = () => {
  const { query } = useRouter()
  const { data, isSuccess } = useGetPlaylistItemsQuery({
    id: query.id as string,
    offset: 0,
    limit: 50,
  })
  const checkIsSavedTrack = useCheckSavedTrack(
    data?.items.map((trackInfo) => trackInfo.track.id)
  )

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return (
    <PlaylistTracksTable
      checkIsSavedTrack={checkIsSavedTrack}
      trackInfo={data.items}
    />
  )
}

export default PlaylistTracksCollection
