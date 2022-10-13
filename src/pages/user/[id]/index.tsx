import { getLayout } from '../../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../../_app'
import UserPlaylists from '../../../features/playlist/components/UserPlaylists'
import ListCollectionWrapper from '../../../core/ui/collection/ListCollectionWrapper'
import UserActionPanel from '../../../features/client/components/user/UserActionPanel'
import UserHeaderProfile from '../../../features/client/components/user/UserHeaderProfile'

const id = 'dullbat8'

const User: NextPageWithLayout = () => (
  <>
    <UserHeaderProfile />
    <UserActionPanel clientType="user" />
    <ListCollectionWrapper>
      <UserPlaylists />
    </ListCollectionWrapper>
  </>
)

User.getLayout = getLayout


export default User