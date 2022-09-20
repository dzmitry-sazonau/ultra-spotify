import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../core/interface'
import Sidebar from '../sidebar/components'
import ContentLayout from './ContentLayout'
import Header from '../header/Header'
import Player from '../player/components'

const StyledInnerLayout = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`

const InnerLayout: FC<IReactChildren> = ({ children }) => (
  <StyledInnerLayout>
    <Sidebar />
    <ContentLayout>
      <Header />
      {children}
    </ContentLayout>
    <Player />
  </StyledInnerLayout>
)

export function getLayout(page: ReactElement) {
  return <InnerLayout>{page}</InnerLayout>
}

export default InnerLayout
