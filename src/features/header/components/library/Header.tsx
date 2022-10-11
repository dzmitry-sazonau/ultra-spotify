import React, { useMemo } from 'react'
import Menu from '../../../../core/ui/menu/Menu'
import { IMenuItem } from '../../../../core/ui/menu/interface'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useGetSplitAsPath } from '../../../../core/hook/useGetSplitAsPath'

const StyledMenuWrapper = styled.div`
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #121212;
`

const Header = () => {
  const { push } = useRouter()
  const paths = useGetSplitAsPath()

  const menuItems: IMenuItem[] = useMemo(
    () => [
      {
        id: 'playlists',
        text: 'Playlists',
        action: () => push('/collection/playlists'),
      },
      {
        id: 'artists',
        text: 'Artists',
        action: () => push('/collection/artists'),
      },
      {
        id: 'albums',
        text: 'Albums',
        action: () => push('/collection/albums'),
      },
    ],
    []
  )

  return (
    <StyledMenuWrapper>
      <Menu
        items={menuItems}
        defaultValue={paths.at(-1)}
      />
    </StyledMenuWrapper>
  )
}

export default Header
