import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../interface'

const StyledCenteredLayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`

const CenteredLayout: FC<IReactChildren> = ({ children }) => (
  <StyledCenteredLayout>{children}</StyledCenteredLayout>
)

export default CenteredLayout
