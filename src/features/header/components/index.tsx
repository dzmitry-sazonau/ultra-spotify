import React from 'react'
import styled from 'styled-components'
import HistoryActions from './HistoryActions'
import UserWidget from './UserWidget'

const StyledHeader = styled.div`
  height: 64px;
  position: sticky;
  top: 0;
  background-image: linear-gradient(rgb(240, 232, 232) 0, rgba(0,0,0,.5) 100%);
  background-color: rgb(240, 232, 232);
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <HistoryActions />
        <UserWidget />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

export default Header
