import React, { useCallback } from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../api'
import HeaderRowCollection from '../header/HeaderRowCollection'
import PlaylistsCollection from './PlaylistsCollection'
import { useRouter } from 'next/router'

const CurrentUserPlaylistsRowCollection = () => {
  const router = useRouter();
  const { data } = useGetCurrentUserPlaylistsQuery({ limit: 8, offset: 0 })
  const pushToPlaylists = useCallback(() => router.push('/collection/playlists'), [])

  return (
    <div>
      <HeaderRowCollection title={'Your playlists'} action={pushToPlaylists} />
      <PlaylistsCollection playlists={data?.items!} />
    </div>
  )
}

export default CurrentUserPlaylistsRowCollection