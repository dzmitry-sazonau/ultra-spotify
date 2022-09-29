import React, { useCallback } from 'react'
import { useGetPlaylistByUserIdQuery } from '../../api'
import HeaderRowCollection from '../header/HeaderRowCollection'
import PlaylistsCollection from './PlaylistsCollection'
import { useRouter } from 'next/router'
import { useLimitForCollectionByType } from '../../hook'

const UserPlaylistsRowCollection = () => {
  const router = useRouter()
  const limit = useLimitForCollectionByType('row')

  const { data } = useGetPlaylistByUserIdQuery({
    id: router.query.id as string,
    limit,
    offset: 0,
  })
  const pushToPlaylists = useCallback(() => router.push(`/user/${router.query.id}/playlists`), [router])

  return (
    <div>
      <HeaderRowCollection
        title={'Public Playlists'}
        action={pushToPlaylists}
      />
      <PlaylistsCollection playlists={data?.items!} />
    </div>
  )
}

export default UserPlaylistsRowCollection
