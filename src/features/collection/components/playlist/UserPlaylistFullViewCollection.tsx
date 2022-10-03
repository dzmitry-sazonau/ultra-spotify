import React from 'react'
import { useGetPlaylistByUserIdQuery } from '../../api'
import PlaylistsCollection from './PlaylistsCollection'
import { useRouter } from 'next/router'

const UserPlaylistFullViewCollection = () => {
  const router = useRouter()
  const { data } = useGetPlaylistByUserIdQuery({
    id: router.query.id as string,
    limit: 50,
    offset: 0,
  })

  return (
    <PlaylistsCollection
      isFullView
      title={'Public Playlists'}
      playlists={data?.items!}
    />
  )
}

export default UserPlaylistFullViewCollection
