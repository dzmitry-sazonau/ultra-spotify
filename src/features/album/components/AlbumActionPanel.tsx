import React from 'react'
import CollectionActionPanel from '../../../core/ui/collection/CollectionActionPanel'
import { useAlbumFollow } from '../hook'

const AlbumActionPanel = () => {
  const { action, isFollowed } = useAlbumFollow()

  return (
    <CollectionActionPanel
      followAction={action}
      isFollowed={isFollowed}
    />
  )
}

export default AlbumActionPanel
