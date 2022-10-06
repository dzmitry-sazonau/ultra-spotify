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

const StyledHr = styled.hr`
  height: 1px;
  width: 100%;
  border: 0;
  background: #282828;
  margin-top: 12px;
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo src="/spotify2.svg" alt="Spotify" />
      <NavLinks />
      <StyledHr />
    </StyledNavbar>

  )
}

export default Navbar