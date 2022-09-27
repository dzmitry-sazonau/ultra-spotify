import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../core/interface'
import Sidebar from '../sidebar/components'
import Header from '../header/Header'
import Player from '../player/components'

const StyledInnerLayout = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledContentLayout = styled.div`
  height: 100%;
  padding: 24px 32px 0 32px;
  background-color: #121212;
  overflow: hidden;
`

const InnerLayout: FC<IReactChildren> = ({ children }) => (
  <StyledInnerLayout>
    <Sidebar />
    <StyledMainLayout>
      <Header />
      <StyledContentLayout>{children}</StyledContentLayout>
    </StyledMainLayout>
    <Player />
  </StyledInnerLayout>
)

export function getLayout(page: ReactElement) {
  return <InnerLayout>{page}</InnerLayout>
}

export default InnerLayout
