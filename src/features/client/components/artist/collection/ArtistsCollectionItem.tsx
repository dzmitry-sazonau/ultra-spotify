import React, { FC } from 'react'
import DynamicRowCollectionItem from '../../../../../core/ui/collection/DynamicRowCollectionItem'
import { IArtistInfo } from '../../../entity'

interface IProps {
  artist: IArtistInfo
}

const ArtistsCollectionItem: FC<IProps> = ({ artist }) => {
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