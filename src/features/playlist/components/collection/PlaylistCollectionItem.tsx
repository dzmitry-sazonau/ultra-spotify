import React, { FC } from 'react'
import DynamicRowCollectionItem from '../../../../core/ui/collection/DynamicRowCollectionItem'
import { IPlaylistWithShortTrack } from '../../entity'

export interface IProps {
  playlist: IPlaylistWithShortTrack
}

const PlaylistCollectionItem: FC<IProps> = ({ playlist }) => {
  return (
    <DynamicRowCollectionItem
      link={`/playlist/${playlist.id}`}
      image={playlist.images[0]?.url}
      title={playlist.name}
      subtitle={(playlist.description[0] === '<' || !playlist.description) ? playlist.owner.display_name : playlist.description}
      handleActionClick={() => {}}
    />
  )
}

export default PlaylistCollectionItem