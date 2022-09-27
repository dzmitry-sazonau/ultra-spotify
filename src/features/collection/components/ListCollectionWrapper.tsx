import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../../core/interface'

const StyledListCollectionWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
`

const ListCollectionWrapper: FC<IReactChildren> = ({ children }) => (
  <StyledListCollectionWrapper>{children}</StyledListCollectionWrapper>
)

export default ListCollectionWrapper