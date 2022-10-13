import React, { FC } from 'react'
import DynamicRowCollection, { IIsFullView } from '../../../../../core/ui/collection/DynamicRowCollection'
import ArtistsCollectionItem from './ArtistsCollectionItem'
import { ICollectionTitleProps } from '../../../../../core/ui/collection/CollectionTitle'
import { IArtistInfo } from '../../../entity'

interface IProps extends IIsFullView, ICollectionTitleProps {
  artists: IArtistInfo[]
}

const ArtistsCollection: FC<IProps> = ({
  artists,
  action,
  title,
  isFullView
}) => (
  <DynamicRowCollection
    isFullView={isFullView}
    action={action}
    title={title}
    data={artists}
  >
    {(props) => props?.map((artist) => (
      <ArtistsCollectionItem
        key={artist.id}
        artist={artist}
      />
    ))}
  </DynamicRowCollection>
)

export default ArtistsCollection
