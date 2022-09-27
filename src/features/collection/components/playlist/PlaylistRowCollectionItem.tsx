import React, { FC } from 'react'
import { IPlaylistRowCollectionItemProps } from '../../interface'
import DynamicRowCollectionItem from '../DynamicRowCollectionItem'

const PlaylistRowCollectionItem: FC<IPlaylistRowCollectionItemProps> = ({ playlist }) => {
  return (
    <DynamicRowCollectionItem
      link={`/playlist/${playlist.id}`}
      image={playlist.images[0].url}
      title={playlist.name}
      subtitle={playlist.description || playlist.owner.display_name}
      handleActionClick={() => {}}
    />
  )
}

export default PlaylistRowCollectionItem