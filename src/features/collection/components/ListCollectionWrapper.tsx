import React, { FC } from 'react'
import styled from 'styled-components'
import { IReactChildren } from '../../../core/interface'

const StyledListCollectionWrapper = styled.div<{ paddingTop: boolean }>`
  display: grid;
  grid-gap: 24px;
  padding: ${(props) => props.paddingTop ? '24px 32px' : '0 32px 24px 32px'};
`

interface IProps extends IReactChildren {
  paddingTop?: boolean
}

const ListCollectionWrapper: FC<IProps> = ({ children, paddingTop = false }) => (
  <StyledListCollectionWrapper paddingTop={paddingTop}>{children}</StyledListCollectionWrapper>
)

export default ListCollectionWrapper