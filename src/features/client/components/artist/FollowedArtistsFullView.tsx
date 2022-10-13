import React from 'react'
import ArtistsCollection from './collection/ArtistsCollection'
import { useGetFollowedArtistsQuery } from '../../api'

const FollowedArtistsFullView = () => {
  const { data } = useGetFollowedArtistsQuery(50)

  return (
    <ArtistsCollection
      isFullView
      title={'Artists'}
      artists={data?.artists.items!}
    />
  )
}

export default FollowedArtistsFullView