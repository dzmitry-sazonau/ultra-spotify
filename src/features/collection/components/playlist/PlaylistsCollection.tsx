import React, { FC } from 'react'
import DynamicCollection from '../DynamicCollection'
import PlaylistCollectionItem from './PlaylistCollectionItem'
import { IPlaylistsCollectionProps } from '../../interface'

const PlaylistsCollection: FC<IPlaylistsCollectionProps> = ({ playlists, type = 'row' }) => (
  <DynamicCollection
    type={type}
    data={playlists}
  >
    {(props) => props?.map((playlist) => (
      <PlaylistCollectionItem
        key={playlist.id}
        playlist={playlist}
      />
    ))}
  </DynamicCollection>
)

export default PlaylistsCollection
