import React, { FC } from 'react'
import { IAlbumRowCollectionItemProps } from '../../interface'
import DynamicCollectionItem from '../DynamicCollectionItem'

const AlbumRowCollectionItem: FC<IAlbumRowCollectionItemProps> = ({ album }) => {
  return (
    <DynamicCollectionItem
      link={`/playlist/${album.id}`}
      image={album.images[0].url}
      title={album.name}
      subtitle={album.artists.map((artist) => artist.name).join(',')}
      handleActionClick={() => {}}
    />
  )
}

export default AlbumRowCollectionItem