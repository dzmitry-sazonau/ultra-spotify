import React, { FC } from 'react'
import { DetailsItem } from './HeaderInfo'

export interface IProps {
  playlists: number
  followers: number
}

const playlistText = 'Playlists'
const followerText = 'Followers'

const HeaderClientDetails: FC<IProps> = ({ followers, playlists }) => (
  <>
    <DetailsItem>{playlists} {playlistText}</DetailsItem>
    <DetailsItem>{followers} {followerText}</DetailsItem>
  </>
)

export default HeaderClientDetails
