import React, { FC } from 'react'
import DynamicRowCollection, { IIsFullView } from '../../../../core/ui/collection/DynamicRowCollection'
import PlaylistCollectionItem from './PlaylistCollectionItem'
import { ICollectionTitleProps } from '../../../../core/ui/collection/CollectionTitle'
import { IPlaylistWithShortTrack } from '../../entity'

interface IProps
  extends IIsFullView,
    ICollectionTitleProps {
  playlists: IPlaylistWithShortTrack[]
}

const PlaylistsCollection: FC<IProps> = ({
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
