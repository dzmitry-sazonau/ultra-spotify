import React, { FC } from 'react'
import DynamicRowCollection from '../dynamicRowCollection/DynamicRowCollection'
import ArtistsCollectionItem from './ArtistsCollectionItem'
import { IArtistsCollectionProps } from '../../interface'

const ArtistsCollection: FC<IArtistsCollectionProps> = ({
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
