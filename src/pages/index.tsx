import { NextPageWithLayout } from './_app'
import { getLayout } from '../features/layout/InnerLayout'
import ListCollectionWrapper from '../features/collection/components/ListCollectionWrapper'
import CurrentUserPlaylistsRowCollection from '../features/collection/components/playlist/CurrentUserPlaylistsRowCollection'
import CurrentUserAlbumsCollection from '../features/collection/components/albums/CurrentUserAlbumsCollection'
import { wrapper } from '../core/store'
import { GetServerSideProps } from 'next'
import {
  getCurrentUserAlbums,
  getCurrentUserPlaylists,
  getRunningOperationPromises,
} from '../features/collection/api'

const Home: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserPlaylistsRowCollection />
    <CurrentUserAlbumsCollection />
  </ListCollectionWrapper>
)

Home.getLayout = getLayout

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getCurrentUserAlbums.initiate({ offset: 0, limit: 8 }))
    store.dispatch(getCurrentUserPlaylists.initiate({ offset: 0, limit: 8 }))

    await Promise.all(getRunningOperationPromises())

    return {
      props: {},
    }
  })

export default Home
