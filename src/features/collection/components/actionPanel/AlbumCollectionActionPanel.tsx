import React from 'react'
import { useAlbumFollow } from '../../hook'
import CollectionActionPanel from './CollectionActionPanel'

const AlbumCollectionActionPanel = () => {
  const { action, isFollowed } = useAlbumFollow()

  return (
    <CollectionActionPanel
      followAction={action}
      isFollowed={isFollowed}
    />
  )
}

export default AlbumCollectionActionPanel
