import React, { FC } from 'react'
import DynamicRowCollection, {
  IIsFullView,
} from '../../../../core/ui/collection/DynamicRowCollection'
import AlbumsCollectionItem from './AlbumsCollectionItem'
import { IAlbum } from '../../entity'
import { ICollectionTitleProps } from '../../../../core/ui/collection/CollectionTitle'

export interface IProps extends IIsFullView, ICollectionTitleProps {
  albums: IAlbum[]
}

const AlbumsCollection: FC<IProps> = ({
  albums,
  action,
  title,
  isFullView,
}) => (
  <DynamicRowCollection
    isFullView={isFullView}
    action={action}
    title={title}
    data={albums}
  >
    {(props) =>
      props?.map((album) => (
        <AlbumsCollectionItem
          key={album.id}
          album={album}
        />
      ))
    }
  </DynamicRowCollection>
)

export default AlbumsCollection
