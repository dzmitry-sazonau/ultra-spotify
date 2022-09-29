import React, { FC } from 'react'
import DynamicCollection from '../DynamicCollection'
import AlbumRowCollectionItem from './AlbumRowCollectionItem'
import { IAlbumsRowCollectionProps } from '../../interface'

const AlbumsRowCollection: FC<IAlbumsRowCollectionProps> = ({ albums }) => (
  <DynamicCollection data={albums}>
    {(props) => props?.map((albumInfo) => (
      <AlbumRowCollectionItem
        key={albumInfo.album.id}
        album={albumInfo.album}
      />
    ))}
  </DynamicCollection>
)

export default AlbumsRowCollection