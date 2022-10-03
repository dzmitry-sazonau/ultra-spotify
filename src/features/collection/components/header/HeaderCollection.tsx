import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IHeaderCollectionProps } from '../../interface'

const StyledHeaderCollection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const StyledTitle = styled.div<{ hasAction: boolean }>`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  ${(props) => props.hasAction && css`
    :hover {
      text-decoration: underline;
    }
  `}
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

const HeaderCollection: FC<IHeaderCollectionProps> = ({ action, title }) => (
  <StyledHeaderCollection>
    <StyledTitle
      hasAction={!!action}
      onClick={action}
    >
      {title}
    </StyledTitle>
    {action && <StyledButton onClick={action}>{seeAll}</StyledButton>}
  </StyledHeaderCollection>
)

export default HeaderCollection