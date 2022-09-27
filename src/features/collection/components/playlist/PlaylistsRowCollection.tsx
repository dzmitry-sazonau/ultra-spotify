import React, { FC } from 'react'
import DynamicRowCollection from '../DynamicRowCollection'
import PlaylistRowCollectionItem from './PlaylistRowCollectionItem'
import { IPlaylistsRowCollectionProps } from '../../interface'

const PlaylistsRowCollection: FC<IPlaylistsRowCollectionProps> = ({ playlists }) => (
  <DynamicRowCollection data={playlists}>
    {(props) => props?.map((playlist) => (
      <PlaylistRowCollectionItem
        key={playlist.id}
        playlist={playlist}
      />
    ))}
  </DynamicRowCollection>
)

export default PlaylistsRowCollection
