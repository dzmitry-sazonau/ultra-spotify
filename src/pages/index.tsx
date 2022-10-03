import { NextPageWithLayout } from './_app'
import { getLayout } from '../features/layout/InnerLayout'
import ListCollectionWrapper from '../features/collection/components/dynamicRowCollection/ListCollectionWrapper'
import CurrentUserPlaylistsCollection from '../features/collection/components/playlist/CurrentUserPlaylistsCollection'
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
    <CurrentUserPlaylistsCollection />
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
