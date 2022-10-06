import React from 'react'
import styled from 'styled-components'
import HistoryActions from '../../history/components/HistoryActions'
import UserWidget from '../../user/components/UserWidget'
import {
  useAttachedEventsForRouter,
  useInitializeHistory,
} from '../../history/hook'

const StyledMainHeader = styled.div`
  height: 64px;
  position: sticky;
  top: 0;
  background: #121212;
  z-index: 1000;
  border-radius: 8px;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`

const MainHeader = () => {
  useInitializeHistory()
  useAttachedEventsForRouter()

  return (
    <StyledMainHeader>
      <StyledHeaderWrapper>
        <HistoryActions />
        <UserWidget />
      </StyledHeaderWrapper>
    </StyledMainHeader>
  )
}

export default MainHeader
