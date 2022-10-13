import React from 'react'
import { useRouter } from 'next/router'
import { useCheckSavedTrack } from '../hook'
import TracksAlbumTable from './table/TracksAlbumTable'
import { useGetAlbumItemsQuery } from '../api'

const TracksAlbum = () => {
  const { query } = useRouter()
  const { data, isSuccess } = useGetAlbumItemsQuery({
    id: query.id as string,
    offset: 0,
    limit: 50,
  })

  const checkIsSavedTrack = useCheckSavedTrack(
    data?.items.map((track) => track.id)
  )

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return (
    <TracksAlbumTable
      tracks={data.items}
      checkIsSavedTrack={checkIsSavedTrack}
    />
  )
}

export default TracksAlbum
