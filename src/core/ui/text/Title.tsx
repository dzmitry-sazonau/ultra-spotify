import React, { FC } from 'react'
import styled from 'styled-components'
import { ITitleProps } from './interface'

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
`

const Title: FC<ITitleProps> = ({ text }) => (
  <StyledTitle>{text}</StyledTitle>
)

export default Title