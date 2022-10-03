import React, { FC } from 'react'
import { IPlaylistCollectionItemProps } from '../../interface'
import DynamicRowCollectionItem from '../dynamicRowCollection/DynamicRowCollectionItem'

const PlaylistCollectionItem: FC<IPlaylistCollectionItemProps> = ({ playlist }) => {
  return (
    <DynamicRowCollectionItem
      link={`/playlist/${playlist.id}`}
      image={playlist.images[0]?.url}
      title={playlist.name}
      subtitle={playlist.description || playlist.owner.display_name}
      handleActionClick={() => {}}
    />
  )
}

export default PlaylistCollectionItem