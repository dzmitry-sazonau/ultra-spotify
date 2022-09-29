import React, { FC } from 'react'
import styled from 'styled-components'
import { IHeaderRowCollectionProps } from '../../interface'
import HeaderCollection from './HeaderCollection'

const StyledButton = styled.div`
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #B3B3B3;
  cursor: pointer;
  font-size: 12px;
  font-weight: 900;
  margin-left: 8px;

  :hover {
    text-decoration: underline;
  }
`

const seeAll = 'See All'

const HeaderRowCollection: FC<IHeaderRowCollectionProps> = (props) => (
  <HeaderCollection {...props}>
    <StyledButton onClick={props.action}>{seeAll}</StyledButton>
  </HeaderCollection>
)

export default HeaderRowCollection