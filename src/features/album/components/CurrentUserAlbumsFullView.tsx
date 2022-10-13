import React from 'react'
import AlbumsCollection from './collection/AlbumsCollection'
import { useGetCurrentUserAlbumsQuery } from '../api'

const CurrentUserAlbumsFullView = () => {
  const { data } = useGetCurrentUserAlbumsQuery({ limit: 50, offset: 0 })

  return (
    <AlbumsCollection
      isFullView
      title={'Albums'}
      albums={data?.items!}
    />
  )
}

export default CurrentUserAlbumsFullView
