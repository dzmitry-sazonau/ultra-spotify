import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IHeaderCollection } from '../../interface'

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

const HeaderCollection: FC<IHeaderCollection> = ({ title, action, children }) => (
  <StyledHeaderCollection>
    <StyledTitle
      hasAction={!!action}
      onClick={action}
    >
      {title}
    </StyledTitle>
    {children}
  </StyledHeaderCollection>
)

export default HeaderCollection
