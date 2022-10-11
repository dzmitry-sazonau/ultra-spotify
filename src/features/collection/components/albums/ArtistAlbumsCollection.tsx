import React, { useCallback } from 'react'
import { useGetArtistAlbumsQuery } from '../../api'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectArtistsByAlbumId } from '../../selector'
import AlbumsCollection from './AlbumsCollection'

const ArtistAlbumsCollection = () => {
  const { query, push } = useRouter();

  const artistsByAlbumId = useSelector(selectArtistsByAlbumId(query.id as string))
  const mainArtist = artistsByAlbumId && artistsByAlbumId[0]

  const pushToArtist = useCallback(() => push(`/artist/${mainArtist?.id}`), [])
  const { data } = useGetArtistAlbumsQuery({ id: mainArtist?.id, limit: 9, offset: 0 }, {
    selectFromResult: ({data}) => ({
      data: {
        ...data,
        items: data?.items.filter((album) => album.id !== query.id as string)
      }
    })
  })

  return (
    <AlbumsCollection
      title={`More by ${mainArtist?.name}`}
      action={pushToArtist}
      albums={data?.items!}
    />
  )
}

export default ArtistAlbumsCollection