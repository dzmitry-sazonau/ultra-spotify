import React, { FC } from 'react'
import DynamicRowCollection from '../dynamicRowCollection/DynamicRowCollection'
import AlbumsCollectionItem from './AlbumsCollectionItem'
import { IAlbumsCollectionProps } from '../../interface'

const AlbumsCollection: FC<IAlbumsCollectionProps> = ({
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
    {(props) => props?.map((album) => (
      <AlbumsCollectionItem
        key={album.id}
        album={album}
      />
    ))}
  </DynamicRowCollection>
)

export default AlbumsCollection
