import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`

const StyledLogo = styled.img`
  height: 40px;
  max-width: 131px;
  width: 100%;
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo src="/spotify2.svg" alt="Spotify" />
      <NavLinks />
    </StyledNavbar>

  )
}

export default Navbar