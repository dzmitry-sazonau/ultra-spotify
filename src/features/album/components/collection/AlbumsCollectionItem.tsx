import React, { FC } from 'react'
import DynamicRowCollectionItem from '../../../../core/ui/collection/DynamicRowCollectionItem'
import { IAlbum } from '../../entity'

export interface IProps {
  album: IAlbum
}

const AlbumsCollectionItem: FC<IProps> = ({ album }) => {
  return (
    <DynamicRowCollectionItem
      link={`/album/${album.id}`}
      image={album.images[0].url}
      title={album.name}
      subtitle={album.artists.map((artist) => artist.name).join(',')}
      handleActionClick={() => {}}
    />
  )
}

export default AlbumsCollectionItem