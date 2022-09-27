import React, { FC } from 'react'
import styled from 'styled-components'
import { IHeaderCollectionProps } from '../interface'

const StyledHeaderCollection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`

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

const HeaderCollection: FC<IHeaderCollectionProps> = ({ title, action }) => (
  <StyledHeaderCollection>
    <StyledTitle onClick={action}>{title}</StyledTitle>
    <StyledButton onClick={action}>{seeAll}</StyledButton>
  </StyledHeaderCollection>
)

export default HeaderCollection