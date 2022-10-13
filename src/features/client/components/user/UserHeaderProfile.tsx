import React from 'react'
import { useGetUserProfileByIdQuery } from '../../api'
import { useRouter } from 'next/router'
import { useGetPlaylistByUserIdQuery } from '../../../playlist/api'
import HeaderInfo from '../../../header/components/source/HeaderInfo'
import HeaderWrapper from '../../../header/components/source/HeaderWrapper'
import HeaderClientDetails from '../../../header/components/source/HeaderClientDetails'

const UserHeaderProfile = () => {
  const { query } = useRouter()
  const { data: profileData } = useGetUserProfileByIdQuery(query.id as string)
  const { data: playlists } = useGetPlaylistByUserIdQuery({ id: query.id as string, limit: 0, offset: 0 })

  return (
    <HeaderWrapper
      type="element"
      isRounded
      src={profileData?.images[0]?.url!}
    >
      <HeaderInfo
        title="Profile"
        name={profileData?.display_name!}
      >
        <HeaderClientDetails
          followers={profileData?.followers.total!}
          playlists={playlists?.total!}
        />
      </HeaderInfo>
    </HeaderWrapper>
  )
}

export default UserHeaderProfile