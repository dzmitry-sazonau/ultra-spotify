import React, { useCallback } from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../api'
import PlaylistsCollection from './PlaylistsCollection'
import { useRouter } from 'next/router'

const CurrentUserPlaylistsCollection = () => {
  const router = useRouter()
  const { data } = useGetCurrentUserPlaylistsQuery({ limit: 8, offset: 0 })
  const pushToPlaylists = useCallback(
    () => router.push('/collection/playlists'),
    []
  )

  return (
    <PlaylistsCollection
      title={'Your playlists'}
      action={pushToPlaylists}
      playlists={data?.items!}
    />
  )
}

export default CurrentUserPlaylistsCollection
