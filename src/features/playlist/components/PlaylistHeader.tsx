import React from 'react'
import { useGetPlaylistQuery } from '../api'
import { useRouter } from 'next/router'
import HeaderWrapper from '../../header/components/source/HeaderWrapper'
import HeaderInfo from '../../header/components/source/HeaderInfo'
import HeaderCollectionDetails from '../../header/components/source/HeaderCollectionDetails'
import { THeaderImage } from '../../header/interface'
import { IImage } from '../../../core/entity'

function useImageType(images: IImage[]): THeaderImage {
  if (!images) {
    return 'background'
  }

  return images.length === 1 ? 'background' : 'element'
}

const PlaylistHeader = () => {
  const { query } = useRouter()
  const { data } = useGetPlaylistQuery(query.id as string)
  const imageType = useImageType(data?.images!)

  return (
    <HeaderWrapper
      type={imageType}
      src={data?.images.at(0)?.url!}
    >
      <HeaderInfo
        title={data?.type!}
        name={data?.name!}
        description={data?.description}
      >
        <HeaderCollectionDetails
          href={`/user/${data?.owner.id}`}
          name={data?.owner.display_name!}
          followers={data?.followers.total!}
          tracks={data?.tracks.total!}
        />
      </HeaderInfo>
    </HeaderWrapper>
  )
}

export default PlaylistHeader
