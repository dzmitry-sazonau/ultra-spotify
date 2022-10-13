import { getLayout } from '../../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../../_app'
import UserPlaylistFullView from '../../../features/playlist/components/UserPlaylistFullView'
import ListCollectionWrapper from '../../../core/ui/collection/ListCollectionWrapper'

const id = 'dullbat8'

const Playlists: NextPageWithLayout = () => (
  <ListCollectionWrapper>
    <UserPlaylistFullView />
  </ListCollectionWrapper>
)

Playlists.getLayout = getLayout


export default Playlists