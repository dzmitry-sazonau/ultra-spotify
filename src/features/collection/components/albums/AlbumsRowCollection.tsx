import React, { FC } from 'react'
import DynamicRowCollection from '../DynamicRowCollection'
import AlbumRowCollectionItem from './AlbumRowCollectionItem'
import { IAlbumsRowCollectionProps } from '../../interface'

const AlbumsRowCollection: FC<IAlbumsRowCollectionProps> = ({ albums }) => (
  <DynamicRowCollection data={albums}>
    {(props) => props?.map((albumInfo) => (
      <AlbumRowCollectionItem
        key={albumInfo.album.id}
        album={albumInfo.album}
      />
    ))}
  </DynamicRowCollection>
)

export default AlbumsRowCollection