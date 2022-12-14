import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import AlbumsCollection from './collection/AlbumsCollection'
import { useGetCurrentUserAlbumsQuery } from '../api'

const CurrentUserAlbumCollection = () => {
  const router = useRouter()
  const { data } = useGetCurrentUserAlbumsQuery({ limit: 8, offset: 0 })
  const pushToAlbums = useCallback(() => router.push('/collection/albums'), [])

  return (
    <AlbumsCollection
      title={'Your albums'}
      action={pushToAlbums}
      albums={data?.items!}
    />
  )
}

export default CurrentUserAlbumCollection
