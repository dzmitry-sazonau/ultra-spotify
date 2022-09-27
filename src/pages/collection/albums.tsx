import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLayout } from '../../features/layout/InnerLayout'

const Albums: NextPageWithLayout = () => (
  <div>Albums</div>
)

Albums.getLayout = getLayout

export default Albums