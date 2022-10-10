import React from 'react'
import { usePlaylistFollow } from '../../hook'
import CollectionActionPanel from './CollectionActionPanel'

const PlaylistCollectionActionPanel = () => {
  const { action, isFollowed } = usePlaylistFollow()

  return (
    <CollectionActionPanel
      followAction={action}
      isFollowed={isFollowed}
    />
  )
}

export default PlaylistCollectionActionPanel
