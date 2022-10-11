import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import ListCollectionWrapper from '../../features/collection/components/ListCollectionWrapper'
import CurrentUserFollowedArtistsFullViewCollection from '../../features/collection/components/artists/CurrentUserFollowedArtistsFullViewCollection'

const Collection: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserFollowedArtistsFullViewCollection />
  </ListCollectionWrapper>
)

Collection.getLayout = getLibraryLayout

export default Collection
