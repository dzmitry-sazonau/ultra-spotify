import React from 'react'
import styled from 'styled-components'
import HistoryActions from '../history/components/HistoryActions'
import UserWidget from '../user/components/UserWidget'
import {
  useAttachedEventsForRouter,
  useInitializeHistory,
} from '../history/hook'

const StyledHeader = styled.div`
  height: 64px;
  position: sticky;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%),
    url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=');
  background-color: rgb(72, 32, 176);
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`

const Header = () => {
  useInitializeHistory()
  useAttachedEventsForRouter()

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
