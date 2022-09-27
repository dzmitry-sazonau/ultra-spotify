import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../../core/interface'

const StyledRowCollectionWrapper = styled.div``

const RowCollectionWrapper: FC<IReactChildren> = ({ children }) => (
  <StyledRowCollectionWrapper>{children}</StyledRowCollectionWrapper>
)

export default RowCollectionWrapper
