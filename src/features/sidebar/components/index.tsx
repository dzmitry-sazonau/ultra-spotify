import React, { FC } from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import LinksToPlaylists from './linksToPlaylists'

const StyledSidebar = styled.div`
  width: 260px;
  padding-top: 24px;
  min-width: 150px;
  background-color: #121212;
  border-radius: 8px;
  overflow: hidden;
`

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <Navbar />
      <LinksToPlaylists />
    </StyledSidebar>
  )
}

export default Sidebar
