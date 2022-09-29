import React from 'react'
import { useGetPlaylistByUserIdQuery } from '../../api'
import PlaylistsCollection from './PlaylistsCollection'
import { useRouter } from 'next/router'
import { useLimitForCollectionByType } from '../../hook'
import HeaderCollection from '../header/HeaderCollection'
import styled from 'styled-components'

const StyledUserPlaylistsTableCollection = styled.div`
  padding: 24px 32px;
`

const UserPlaylistsTableCollection = () => {
  const router = useRouter()
  const limit = useLimitForCollectionByType('table')
  const { data } = useGetPlaylistByUserIdQuery({
    id: router.query.id as string,
    limit,
    offset: 0,
  })

  return (
    <StyledUserPlaylistsTableCollection>
      <HeaderCollection title={'Public Playlists'} />
      <PlaylistsCollection
        type="table"
        playlists={data?.items!}
      />
    </StyledUserPlaylistsTableCollection>
  )
}

export default UserPlaylistsTableCollection
