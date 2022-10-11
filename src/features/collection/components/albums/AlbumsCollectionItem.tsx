import React, { FC } from 'react'
import { IAlbumsCollectionItemProps } from '../../interface'
import DynamicRowCollectionItem from '../dynamicRowCollection/DynamicRowCollectionItem'

const AlbumsCollectionItem: FC<IAlbumsCollectionItemProps> = ({ album }) => {
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