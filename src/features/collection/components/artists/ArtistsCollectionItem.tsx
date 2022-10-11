import React, { FC } from 'react'
import { IArtistsCollectionItemProps } from '../../interface'
import DynamicRowCollectionItem from '../dynamicRowCollection/DynamicRowCollectionItem'

const ArtistsCollectionItem: FC<IArtistsCollectionItemProps> = ({ artist }) => {
  return (
    <DynamicRowCollectionItem
      link={`/artist/${artist.id}`}
      image={artist.images[0].url}
      title={artist.name}
      isImageRounded
      subtitle="Artist"
      handleActionClick={() => {}}
    />
  )
}

export default ArtistsCollectionItem