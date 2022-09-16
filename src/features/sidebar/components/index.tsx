import React, { FC } from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  width: 260px;
  min-width: 150px;
  background-color: #000000;
`

const Sidebar: FC = () => <StyledSidebar>SIDEBAR</StyledSidebar>

export default Sidebar
