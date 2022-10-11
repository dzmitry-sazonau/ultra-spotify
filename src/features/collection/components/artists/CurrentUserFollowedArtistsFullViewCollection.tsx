import React from 'react'
import { useGetFollowedArtistsQuery } from '../../api'
import ArtistsCollection from './ArtistsCollection'

const CurrentUserFollowedArtistsFullViewCollection = () => {
  const { data } = useGetFollowedArtistsQuery(50)

  return (
    <ArtistsCollection
      isFullView
      title={'Artists'}
      artists={data?.artists.items!}
    />
  )
}

export default CurrentUserFollowedArtistsFullViewCollection