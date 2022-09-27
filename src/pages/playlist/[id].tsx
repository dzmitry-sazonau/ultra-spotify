import { getLayout } from '../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../_app'

const Playlist: NextPageWithLayout = () => (
  <div>Playlist</div>
)

Playlist.getLayout = getLayout


export default Playlist