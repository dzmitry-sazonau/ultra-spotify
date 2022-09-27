import React, { useCallback } from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../api'
import HeaderCollection from '../HeaderCollection'
import PlaylistsRowCollection from './PlaylistsRowCollection'
import { useRouter } from 'next/router'

const CurrentUserPlaylistsCollection = () => {
  const router = useRouter();
  const { data } = useGetCurrentUserPlaylistsQuery({ limit: 8, offset: 0 })
  const pushToPlaylists = useCallback(() => router.push('/collection/playlists'), [])

  return (
    <div>
      <HeaderCollection title={'Your playlists'} action={pushToPlaylists} />
      <PlaylistsRowCollection playlists={data?.items!} />
    </div>
  )
}

export default CurrentUserPlaylistsCollection