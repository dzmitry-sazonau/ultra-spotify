import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import FollowedArtistsFullView from '../../features/client/components/artist/FollowedArtistsFullView'
import ListCollectionWrapper from '../../core/ui/collection/ListCollectionWrapper'

const Collection: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <FollowedArtistsFullView />
  </ListCollectionWrapper>
)

Collection.getLayout = getLibraryLayout

export default Collection
