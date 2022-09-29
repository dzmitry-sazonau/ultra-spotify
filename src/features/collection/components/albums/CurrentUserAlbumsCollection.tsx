import React, { useCallback } from 'react'
import { useGetCurrentUserAlbumsQuery } from '../../api'
import HeaderRowCollection from '../header/HeaderRowCollection'
import { useRouter } from 'next/router'
import AlbumsRowCollection from './AlbumsRowCollection'

const CurrentUserAlbumCollection = () => {
  const router = useRouter();
  const { data } = useGetCurrentUserAlbumsQuery({ limit: 8, offset: 0 })
  const pushToAlbums = useCallback(() => router.push('/collection/albums'), [])

  return (
    <div>
      <HeaderRowCollection title={'Your albums'} action={pushToAlbums} />
      <AlbumsRowCollection albums={data?.items!} />
    </div>
  )
}

export default CurrentUserAlbumCollection