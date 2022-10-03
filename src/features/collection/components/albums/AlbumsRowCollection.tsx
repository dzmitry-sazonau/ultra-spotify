import React, { FC } from 'react'
import DynamicRowCollection from '../dynamicRowCollection/DynamicRowCollection'
import AlbumRowCollectionItem from './AlbumRowCollectionItem'
import { IAlbumsRowCollectionProps } from '../../interface'

const AlbumsRowCollection: FC<IAlbumsRowCollectionProps> = ({
  albums,
  action,
  title,
  isFullView
}) => (
  <DynamicRowCollection
    isFullView={isFullView}
    action={action}
    title={title}
    data={albums}
  >
    {(props) => props?.map((albumInfo) => (
      <AlbumRowCollectionItem
        key={albumInfo.album.id}
        album={albumInfo.album}
      />
    ))}
  </DynamicRowCollection>
)

export default AlbumsRowCollection
