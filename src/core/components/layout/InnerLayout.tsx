import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../interface'

const StyledInnerLayout = styled.div`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`

const InnerLayout: FC<IReactChildren> = ({ children }) => (
  <StyledInnerLayout>{children}</StyledInnerLayout>
)

export default InnerLayout
