import React, { FC } from 'react'
import { useCheckSavedTrack } from '../hook'
import { useRouter } from 'next/router'
import TracksPlaylistTable from './table/TracksPlaylistTable'
import { useGetPlaylistItemsQuery } from '../api'

const TracksPlaylist: FC = () => {
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
    <TracksPlaylistTable
      checkIsSavedTrack={checkIsSavedTrack}
      trackInfo={data.items}
    />
  )
}

export default TracksPlaylist
