import React, { FC, useCallback } from 'react'
import { useGetPlaylistByUserIdQuery } from '../api'
import PlaylistsCollection from './collection/PlaylistsCollection'
import { useRouter } from 'next/router'

const UserPlaylists: FC = () => {
  const router = useRouter()

  const { data } = useGetPlaylistByUserIdQuery({
    id: router.query.id as string,
    limit: 8,
    offset: 0,
  })
  const pushToPlaylists = useCallback(
    () => router.push(`/user/${router.query.id}/playlists`),
    [router]
  )

  return (
    <PlaylistsCollection
      title={'Public Playlists'}
      action={pushToPlaylists}
      playlists={data?.items!}
    />
  )
}

export default UserPlaylists
