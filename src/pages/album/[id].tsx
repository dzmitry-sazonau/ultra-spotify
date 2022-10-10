import React from 'react'
import styled from 'styled-components'
import { NextPageWithLayout } from '../_app'
import { getLayout } from '../../features/layout/InnerLayout'
import AlbumTracksCollection from '../../features/collection/components/tracks/AlbumTracksCollection'
import AlbumCollectionHeader from '../../features/collection/components/header/AlbumCollectionHeader'
import AlbumCollectionActionPanel from '../../features/collection/components/actionPanel/AlbumCollectionActionPanel'
import AlbumCopyrights from '../../features/collection/components/albums/AlbumCopyrights'
import ListCollectionWrapper from '../../features/collection/components/ListCollectionWrapper'
import ArtistAlbumsCollection from '../../features/collection/components/albums/ArtistAlbumsCollection'

const StyledPlaylist = styled.div`
  padding-bottom: 24px;
  position: relative;
`

const Album: NextPageWithLayout = () => (
  <StyledPlaylist>
    <AlbumCollectionHeader />

    <AlbumCollectionActionPanel />

    <AlbumTracksCollection />

    <AlbumCopyrights />

    <ListCollectionWrapper>
      <ArtistAlbumsCollection />
    </ListCollectionWrapper>
  </StyledPlaylist>
);


Album.getLayout = getLayout

export default Album