import React, { FC } from 'react'
import styled from 'styled-components'
import Link from './Link'
import { IActiveLinkProps } from './interface'

const StyledLinksToPlaylistItem = styled(Link)<{ isActive?: boolean }>`
  && {
    color: ${(props) => (props.isActive ? '#ffffff' : '#b3b3b3')};

    :hover {
      color: #ffffff;
      text-decoration: none;
    }
  }
`

const ActiveLink: FC<IActiveLinkProps> = ({ children, isActive, ...props }) => (
  <StyledLinksToPlaylistItem
    isActive={isActive}
    {...props}
  >
    {children}
  </StyledLinksToPlaylistItem>
)

export default ActiveLink
