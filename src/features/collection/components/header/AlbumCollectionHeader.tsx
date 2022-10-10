import React from 'react'
import { useGetAlbumQuery } from '../../api'
import { useRouter } from 'next/router'
import HeaderWrapper from '../../../header/components/source/HeaderWrapper'
import HeaderInfo from '../../../header/components/source/HeaderInfo'
import HeaderDetails from './HeaderDetails'

const AlbumCollectionHeader = () => {
  const { query } = useRouter()
  const { data } = useGetAlbumQuery(query.id as string)

  return (
    <HeaderWrapper
      type="element"
      src={data?.images.at(0)?.url!}
    >
      <HeaderInfo
        title={data?.type!}
        name={data?.name!}
      >
        <HeaderDetails
          href={`/artist/${data?.artists[0].id}`}
          name={data?.artists[0].name!}
          tracks={data?.tracks.total!}
        />
      </HeaderInfo>
    </HeaderWrapper>
  )
}

export default AlbumCollectionHeader