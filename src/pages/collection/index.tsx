import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLayout } from '../../features/layout/InnerLayout'

const Collection: NextPageWithLayout = () => (
  <div>Collection</div>
)

Collection.getLayout = getLayout

export default Collection