import { getLayout } from '../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../_app'
import styled from 'styled-components'
import TracksPlaylist from '../../features/track/components/TracksPlaylist'
import PlaylistHeader from '../../features/playlist/components/PlaylistHeader'
import PlaylistActionPanel from '../../features/playlist/components/PlaylistActionPanel'

const StyledPlaylist = styled.div`
  padding-bottom: 24px;
  position: relative;
`

const Playlist: NextPageWithLayout = () => {
  return (
    <StyledPlaylist>
      <PlaylistHeader />
      <PlaylistActionPanel />
      <TracksPlaylist />
    </StyledPlaylist>
  )
}

Playlist.getLayout = getLayout

export default Playlist
