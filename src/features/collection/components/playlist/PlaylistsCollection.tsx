import React, { FC } from 'react'
import DynamicRowCollection from '../dynamicRowCollection/DynamicRowCollection'
import PlaylistCollectionItem from './PlaylistCollectionItem'
import { IPlaylistsCollectionProps } from '../../interface'

const PlaylistsCollection: FC<IPlaylistsCollectionProps> = ({
  playlists,
  isFullView,
  title,
  action,
}) => (
  <DynamicRowCollection
    isFullView={isFullView}
    title={title}
    action={action}
    data={playlists}
  >
    {(props) => props?.map((playlist) => (
      <PlaylistCollectionItem
        key={playlist.id}
        playlist={playlist}
      />
    ))}
  </DynamicRowCollection>
)

export default PlaylistsCollection
