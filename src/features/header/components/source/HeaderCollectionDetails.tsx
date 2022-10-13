import React, { FC } from 'react'
import styled from 'styled-components'
import { DetailsItem } from './HeaderInfo'
import Link from '../../../../core/ui/link/Link'

export interface IProps {
  href: string
  name: string
  followers?: number
  tracks: number,
}

const StyledUserLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
`

const likes = 'likes'
const songs = 'songs'

const HeaderCollectionDetails: FC<IProps> = ({
  name,
  tracks,
  followers,
  href,
}) => (
  <>
    <StyledUserLink href={href}>{name}</StyledUserLink>

    {followers && <DetailsItem>{followers} {likes}</DetailsItem>}

    <DetailsItem>{tracks} {songs}</DetailsItem>
  </>
)

export default HeaderCollectionDetails
