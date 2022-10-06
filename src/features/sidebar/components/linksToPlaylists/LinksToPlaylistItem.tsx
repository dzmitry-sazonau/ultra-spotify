import React, { FC } from 'react'
import styled from 'styled-components'
import { ILinksToPlaylistItemProps } from '../../interface'
import { useRouter } from 'next/router'
import ActiveLink from '../../../../core/ui/link/ActiveLink'
import { textEllipsis } from '../../../../core/mixins'

const StyledLinksToPlaylistItem = styled(ActiveLink)`
  && {
    height: 32px;
    line-height: 32px;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    ${textEllipsis()}
  }
`

const LinksToPlaylistItem: FC<ILinksToPlaylistItemProps> = ({ name, id }) => {
  const { query } = useRouter()
  const isActive = query?.id === id

  if (!name) {
    return <></>
  }

  return (
    <StyledLinksToPlaylistItem
      isActive={isActive}
      href={`/playlist/${id}`}
    >
      {name}
    </StyledLinksToPlaylistItem>
  )
}

export default LinksToPlaylistItem
