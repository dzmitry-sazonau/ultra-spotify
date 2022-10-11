import React from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../api'
import PlaylistsCollection from './PlaylistsCollection'

const CurrentUserPlaylistFullViewCollection = () => {
  const { data } = useGetCurrentUserPlaylistsQuery({ limit: 50, offset: 0 })

  return (
    <PlaylistsCollection
      isFullView
      title={'Playlists'}
      playlists={data?.items!}
    />
  )
}

export default CurrentUserPlaylistFullViewCollection
