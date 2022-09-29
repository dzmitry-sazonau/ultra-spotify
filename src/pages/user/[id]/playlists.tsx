import { getLayout } from '../../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../../_app'
import UserPlaylistsTableCollection from '../../../features/collection/components/playlist/UserPlaylistTableCollection'

const id = 'dullbat8'

const Playlists: NextPageWithLayout = () => (
  <>
    <UserPlaylistsTableCollection />
  </>
)

Playlists.getLayout = getLayout


export default Playlists