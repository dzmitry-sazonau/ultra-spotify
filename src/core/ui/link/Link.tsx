import React, { FC } from 'react'
import NextLink from 'next/link'
import { ILinkProps } from './interface'
import styled from 'styled-components'

const StyledLink = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }
`

const Link: FC<ILinkProps> = ({ href, children, className }) => (
  <NextLink href={href}>
    <StyledLink className={className}>{children}</StyledLink>
  </NextLink>
)

export default Link
