import React, { FC } from 'react'
import { IPlaylistCollectionItemProps } from '../../interface'
import DynamicCollectionItem from '../DynamicCollectionItem'

const PlaylistCollectionItem: FC<IPlaylistCollectionItemProps> = ({ playlist }) => {
  return (
    <DynamicCollectionItem
      link={`/playlist/${playlist.id}`}
      image={playlist.images[0]?.url}
      title={playlist.name}
      subtitle={playlist.description || playlist.owner.display_name}
      handleActionClick={() => {}}
    />
  )
}

export default PlaylistCollectionItem