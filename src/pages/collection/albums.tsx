import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import ListCollectionWrapper from '../../features/collection/components/ListCollectionWrapper'
import CurrentUserAlbumsFullViewCollection from '../../features/collection/components/albums/CurrentUserAlbumsFullViewCollection'

const Albums: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserAlbumsFullViewCollection />
  </ListCollectionWrapper>
)

Albums.getLayout = getLibraryLayout

export default Albums
