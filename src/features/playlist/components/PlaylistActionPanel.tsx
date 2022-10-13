import React from 'react'
import { usePlaylistFollow } from '../hook'
import CollectionActionPanel from '../../../core/ui/collection/CollectionActionPanel'

const PlaylistActionPanel = () => {
  const { action, isFollowed } = usePlaylistFollow()

  return (
    <CollectionActionPanel
      followAction={action}
      isFollowed={isFollowed}
    />
  )
}

export default PlaylistActionPanel
