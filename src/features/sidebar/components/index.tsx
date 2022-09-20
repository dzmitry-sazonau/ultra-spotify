import React, { FC } from 'react'
import styled from 'styled-components'
import Navbar from './navbar'

const StyledSidebar = styled.div`
  width: 260px;
  padding-top: 24px;
  min-width: 150px;
  background-color: #000000;
`

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <Navbar />
    </StyledSidebar>
  )
}

export default Sidebar
