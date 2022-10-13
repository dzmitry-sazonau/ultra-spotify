import { NextPageWithLayout } from './_app'
import { getLayout } from '../features/layout/InnerLayout'
import CurrentUserPlaylists from '../features/playlist/components/CurrentUserPlaylists'
import CurrentUserAlbums from '../features/album/components/CurrentUserAlbums'
import ListCollectionWrapper from '../core/ui/collection/ListCollectionWrapper'

const Home: NextPageWithLayout = () => (
  <ListCollectionWrapper paddingTop>
    <CurrentUserPlaylists />
    <CurrentUserAlbums />
  </ListCollectionWrapper>
)

Home.getLayout = getLayout

export default Home
