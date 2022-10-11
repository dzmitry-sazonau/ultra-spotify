import { useGetCurrentUserAlbumsQuery } from '../../api'
import React from 'react'
import AlbumsCollection from './AlbumsCollection'

const CurrentUserAlbumsFullViewCollection = () => {
  const { data } = useGetCurrentUserAlbumsQuery({ limit: 50, offset: 0 })

  return (
    <AlbumsCollection
      isFullView
      title={'Albums'}
      albums={data?.items!}
    />
  )
}

export default CurrentUserAlbumsFullViewCollection
