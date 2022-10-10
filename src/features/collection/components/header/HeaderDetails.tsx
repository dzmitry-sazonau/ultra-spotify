import React, { FC } from 'react'
import styled from 'styled-components'
import { dotBeforeElement } from '../../../../core/mixins'
import { DetailsItem } from '../../../header/components/source/HeaderInfo'
import { ICollectionDetailsHeaderProps } from '../../interface'
import Link from '../../../../core/ui/link/Link'

const StyledUserLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
`

const StyledDetailsItem = styled(DetailsItem)`
  ${dotBeforeElement()}
`

const likes = 'likes'
const songs = 'songs'

const HeaderDetails: FC<ICollectionDetailsHeaderProps> = ({
  name,
  tracks,
  followers,
  href,
}) => (
  <>
    <StyledUserLink href={href}>{name}</StyledUserLink>

    {followers && <StyledDetailsItem>{followers} {likes}</StyledDetailsItem>}

    <StyledDetailsItem>{tracks} {songs}</StyledDetailsItem>
  </>
)

export default HeaderDetails
