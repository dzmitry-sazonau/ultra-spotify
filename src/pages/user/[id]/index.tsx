import { getLayout } from '../../../features/layout/InnerLayout'
import { NextPageWithLayout } from '../../_app'
import HeaderProfile from '../../../features/user/components/HeaderProfile'
import ListCollectionWrapper from '../../../features/collection/components/dynamicRowCollection/ListCollectionWrapper'
import UserPlaylistsCollection from '../../../features/collection/components/playlist/UserPlaylistsCollection'
import UserActionPanel from '../../../features/actionPanel/components/UserActionPanel'

const id = 'dullbat8'

const User: NextPageWithLayout = () => (
  <>
    <HeaderProfile />
    <UserActionPanel />
    <ListCollectionWrapper>
      <UserPlaylistsCollection />
    </ListCollectionWrapper>
  </>
)

User.getLayout = getLayout


export default User