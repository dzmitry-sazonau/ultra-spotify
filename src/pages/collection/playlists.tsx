import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLibraryLayout } from '../../features/layout/InnerLayout'
import ListCollectionWrapper from '../../core/ui/collection/ListCollectionWrapper'
import CurrentUserPlaylistFullView from '../../features/playlist/components/CurrentUserPlaylistFullView'

const Playlists: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserPlaylistFullView />
  </ListCollectionWrapper>
)

Playlists.getLayout = getLibraryLayout

export default Playlists
