import { getLayout } from '../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../_app'
import styled from 'styled-components'
import PlaylistTracksTableCollection from '../../features/collection/components/tracks/PlaylistTracksTableCollection'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { wrapper } from '../../core/store'
import {
  getPlaylistItems,
  getRunningOperationPromises
} from '../../features/collection/api'

const StyledPlaylist = styled.div`
  padding: 24px 32px;
`

const Playlist: NextPageWithLayout = () => {
  const { query } = useRouter()

  return (
    <StyledPlaylist>
      <PlaylistTracksTableCollection id={query.id as string} />
    </StyledPlaylist>
  )
}

Playlist.getLayout = getLayout

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    store.dispatch(getPlaylistItems.initiate({id: context.query.id as string, offset: 0, limit: 8 }))

    await Promise.all(getRunningOperationPromises())

    return {
      props: {},
    }
  })

export default Playlist
