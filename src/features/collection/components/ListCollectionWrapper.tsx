import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../../core/interface'

const StyledListCollectionWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  padding: 0 32px 24px 32px;
`

const ListCollectionWrapper: FC<IReactChildren> = ({ children }) => (
  <StyledListCollectionWrapper>{children}</StyledListCollectionWrapper>
)

export default ListCollectionWrapper