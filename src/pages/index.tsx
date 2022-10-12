import { NextPageWithLayout } from './_app'
import { getLayout } from '../features/layout/InnerLayout'
import ListCollectionWrapper from '../features/collection/components/ListCollectionWrapper'
import CurrentUserPlaylistsCollection from '../features/collection/components/playlist/CurrentUserPlaylistsCollection'
import CurrentUserAlbumsCollection from '../features/collection/components/albums/CurrentUserAlbumsCollection'

const Home: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <CurrentUserPlaylistsCollection />
    <CurrentUserAlbumsCollection />
  </ListCollectionWrapper>
)

Home.getLayout = getLayout

export default Home
