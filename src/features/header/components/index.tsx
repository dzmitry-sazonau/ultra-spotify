import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  height: 64px;
  position: sticky;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  background-color: rgb(72, 32, 176);
`

const Header = () => <StyledHeader>Header</StyledHeader>

export default Header
