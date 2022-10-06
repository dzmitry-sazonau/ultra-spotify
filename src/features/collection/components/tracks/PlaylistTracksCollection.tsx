import React, { FC } from 'react'
import { useGetPlaylistItemsData } from '../../hook'
import { useRouter } from 'next/router'
import PlaylistTracksTable from './PlaylistTracksTable'

const PlaylistTracksCollection: FC = () => {
  const { query } = useRouter()
  const { isSuccess, data } = useGetPlaylistItemsData(query.id as string)

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return <PlaylistTracksTable trackInfo={data.items} />
}

export default PlaylistTracksCollection
