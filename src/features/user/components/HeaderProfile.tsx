import React from 'react'
import { useGetUserProfileByIdQuery } from '../api'
import { useRouter } from 'next/router'
import { useGetPlaylistByUserIdQuery } from '../../collection/api'
import styled from 'styled-components'

const StyledHeaderProfile = styled.div`
  display: flex;
  background: linear-gradient(rgb(56, 48, 56) 0,rgba(0,0,0,.5) 100%);
  padding: 24px 32px;
  cursor: default;
  max-height: 280px;
`

const StyledProfileImageWrapper = styled.div`
  width: 232px;
  height: 232px;
  margin-inline-end: 24px;
`

const StyledProfileImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;
`

const StyledProfileInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-end;
`

const StyledTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 4px
`

const StyledProfileName = styled.span`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: normal;
  overflow: hidden;
  text-align: left;
  width: 100%;
  word-break: break-word;
  font-size: 96px;
  font-weight: 900;
`

const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
`

const StyledDetails = styled.span`
  font-size: 14px;

  :not(:first-child)::before {
    content: "•";
    margin: 0 4px;
  }
`

const title = 'Profile'

const HeaderProfile = () => {
  const { query } = useRouter()

  const { data: profileData } = useGetUserProfileByIdQuery(query.id as string)
  const { data: playlists } = useGetPlaylistByUserIdQuery({ id: query.id as string, limit: 0, offset: 0 })

  return (
    <StyledHeaderProfile>
      <StyledProfileImageWrapper>
        <StyledProfileImage src={profileData?.images[0]?.url} />
      </StyledProfileImageWrapper>
      <StyledProfileInfoWrapper>
        <StyledTitle>{title}</StyledTitle>
          <StyledProfileName>{profileData?.display_name}</StyledProfileName>
        <StyledDetailsWrapper>
          <StyledDetails>{playlists?.total} Playlists</StyledDetails>
          <StyledDetails>{profileData?.followers.total} Followers</StyledDetails>
        </StyledDetailsWrapper>
      </StyledProfileInfoWrapper>
    </StyledHeaderProfile>
  )
}

export default HeaderProfile