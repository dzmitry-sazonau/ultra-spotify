import { getLayout } from '../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../_app'
import styled from 'styled-components'
import PlaylistTracksCollection from '../../features/collection/components/tracks/PlaylistTracksCollection'
import PlaylistCollectionHeader from '../../features/collection/components/header/PlaylistCollectionHeader'
import PlaylistCollectionActionPanel from '../../features/collection/components/actionPanel/PlaylistCollectionActionPanel'

const StyledPlaylist = styled.div`
  padding-bottom: 24px;
  position: relative;
`

const Playlist: NextPageWithLayout = () => {
  return (
    <StyledPlaylist>
      <PlaylistCollectionHeader />
      <PlaylistCollectionActionPanel />
      <PlaylistTracksCollection />
    </StyledPlaylist>
  )
}

Playlist.getLayout = getLayout

export default Playlist
