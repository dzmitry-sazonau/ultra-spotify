import React, { FC } from 'react'
import { IHeaderInfoProps } from '../../interface'
import styled from 'styled-components'
import { dotBeforeElement } from '../../../../core/mixins'

const StyledHeaderInfo = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: flex-end;
  z-index: 0;
`

const StyledTitle = styled.span`
  font-weight: 700;
  margin-top: 4px;
  text-transform: uppercase;
  font-size: 12px;
`

const StyledNameWrapper = styled.span`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: normal;
  overflow: hidden;
  text-align: left;
  width: 100%;
  word-break: break-word;
`

const StyledName = styled.h2`
  font-size: 96px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
`

const StyledDescription = styled.span`
  color: #b3b3b3;
  opacity: 0.7;
  font-weight: 400;
  margin-top: 8px;
`

const StyledDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
`

export const DetailsItem = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  ${dotBeforeElement()}
`

const HeaderInfo: FC<IHeaderInfoProps> = ({
  className,
  title,
  description,
  name,
  children,
}) => (
  <StyledHeaderInfo className={className}>
    <StyledTitle>{title}</StyledTitle>

    <StyledNameWrapper>
      <StyledName>{name}</StyledName>
    </StyledNameWrapper>

    {description && <StyledDescription>{description}</StyledDescription>}

    <StyledDetails>{children}</StyledDetails>
  </StyledHeaderInfo>
)

export default HeaderInfo
