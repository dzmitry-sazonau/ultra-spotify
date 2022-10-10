import React, { FC } from 'react'
import { ICopyrightsProps } from './interface'
import styled from 'styled-components'

const StyledCopyrightsWrapper = styled.div``

const StyledCopyrightsTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
`

const StyledCopyrightsList = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledCopyrightsListItem = styled.span`
  font-size: 11px;
  font-weight: 500;
`

const Copyrights: FC<ICopyrightsProps> = ({ copyrights, title, className }) => (
  <StyledCopyrightsWrapper className={className}>
    {title && <StyledCopyrightsTitle>{title}</StyledCopyrightsTitle>}

    <StyledCopyrightsList>
      {copyrights?.map(({ text }) => (
        <StyledCopyrightsListItem key={text}>{text}</StyledCopyrightsListItem>
      ))}
    </StyledCopyrightsList>
  </StyledCopyrightsWrapper>
)

export default Copyrights
