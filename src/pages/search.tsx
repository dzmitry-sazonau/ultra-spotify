import { getLayout } from '../features/layout/InnerLayout'
import { NextPageWithLayout } from './_app'

const Search: NextPageWithLayout = () => (
  <div>HELLO</div>
)

Search.getLayout = getLayout


export default Search