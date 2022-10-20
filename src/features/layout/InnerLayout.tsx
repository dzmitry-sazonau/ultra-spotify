import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../core/interface'
import Sidebar from '../sidebar/components'
import MainHeader from '../header/components/MainHeader'
import Player from '../player/components/Player'
import LibraryHeader from '../header/components/library/Header'

const StyledInnerLayout = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
  gap: 8px;
  padding: 8px;
  background: black;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`

const StyledContentLayout = styled.div`
  height: 100%;
  background-color: #121212;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
  margin-top: 8px;
`

const InnerLayout: FC<IReactChildren> = ({ children }) => (
  <StyledInnerLayout>
    <Sidebar />
    <StyledMainLayout>
      <MainHeader />
      <StyledContentLayout>{children}</StyledContentLayout>
    </StyledMainLayout>
    <Player />
  </StyledInnerLayout>
)

export function getLayout(page: ReactElement) {
  return <InnerLayout>{page}</InnerLayout>
}

export function getLibraryLayout(page: ReactElement) {
  return (
    <InnerLayout>
      <LibraryHeader />
      {page}
    </InnerLayout>
  )
}

export default InnerLayout
