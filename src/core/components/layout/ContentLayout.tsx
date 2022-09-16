import React, { FC } from 'react'
import { IReactChildren } from '../../interface'
import styled from 'styled-components'

const StyledContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ContentLayout: FC<IReactChildren> = ({ children }) => (
  <StyledContentLayout>{children}</StyledContentLayout>
)

export default ContentLayout
