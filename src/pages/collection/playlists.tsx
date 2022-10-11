import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import ListCollectionWrapper from '../../features/collection/components/ListCollectionWrapper'
import CurrentUserPlaylistFullViewCollection
  from '../../features/collection/components/playlist/CurrentUserPlaylistFullViewCollection'

const Playlists: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserPlaylistFullViewCollection />
  </ListCollectionWrapper>
)

Playlists.getLayout = getLibraryLayout

export default Playlists