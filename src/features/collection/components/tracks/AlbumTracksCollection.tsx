import React from 'react'
import { useGetAlbumItemsQuery } from '../../api'
import { useRouter } from 'next/router'
import { useCheckSavedTrack } from '../../hook'
import AlbumTracksTable from './AlbumTracksTable'

const AlbumTracksCollection = () => {
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
    <AlbumTracksTable
      tracks={data.items}
      checkIsSavedTrack={checkIsSavedTrack}
    />
  )
}

export default AlbumTracksCollection
