import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import CurrentUserAlbumsFullView from '../../features/album/components/CurrentUserAlbumsFullView'
import ListCollectionWrapper from '../../core/ui/collection/ListCollectionWrapper'

const Albums: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserAlbumsFullView />
  </ListCollectionWrapper>
)

Albums.getLayout = getLibraryLayout

export default Albums
