import React from 'react'
import { NextPageWithLayout } from '../_app'
import { getLayout } from '../../features/layout/InnerLayout'

const Playlists: NextPageWithLayout = () => (
  <div>Playlists</div>
)

Playlists.getLayout = getLayout

export default Playlists