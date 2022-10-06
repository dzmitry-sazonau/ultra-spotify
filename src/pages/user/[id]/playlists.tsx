import { getLayout } from '../../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../../_app'
import UserPlaylistFullViewCollection from '../../../features/collection/components/playlist/UserPlaylistFullViewCollection'
import ListCollectionWrapper from '../../../features/collection/components/ListCollectionWrapper'

const id = 'dullbat8'

const Playlists: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <UserPlaylistFullViewCollection />
  </ListCollectionWrapper>
)

Playlists.getLayout = getLayout


export default Playlists