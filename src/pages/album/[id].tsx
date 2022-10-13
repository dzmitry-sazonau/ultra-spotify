import React from 'react'
import styled from 'styled-components'
import { NextPageWithLayout } from '../_app'
import { getLayout } from '../../features/layout/InnerLayout'
import TracksAlbum from '../../features/track/components/TracksAlbum'
import AlbumHeader from '../../features/album/components/AlbumHeader'
import AlbumActionPanel from '../../features/album/components/AlbumActionPanel'
import AlbumCopyrights from '../../features/album/components/AlbumCopyrights'
import ListCollectionWrapper from '../../core/ui/collection/ListCollectionWrapper'
import ArtistAlbums from '../../features/album/components/ArtistAlbums'

const StyledPlaylist = styled.div`
  padding-bottom: 24px;
  position: relative;
`

const Album: NextPageWithLayout = () => (
  <StyledPlaylist>
    <AlbumHeader />

    <AlbumActionPanel />

    <TracksAlbum />

    <AlbumCopyrights />

    <ListCollectionWrapper paddingTop>
      <ArtistAlbums />
    </ListCollectionWrapper>
  </StyledPlaylist>
);


Album.getLayout = getLayout

export default Album