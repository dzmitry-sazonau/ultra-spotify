import React, { FC } from 'react'
import styled from 'styled-components'
import { IClassName } from '../interface'

const StyledExplicit = styled.span`
  background-color: hsla(0,0%,100%,.6);
  color: #121212;
  line-height: 10px;
  padding: 2px 5px;
  text-transform: uppercase;
  font-size: 9px;
  height: 16px;
  border-radius: 2px;
`

const Explicit: FC<IClassName> = ({ className }) => (
  <StyledExplicit className={className}>E</StyledExplicit>
)

export default Explicit