import React, { FC } from 'react'
import { IOutlinedButton } from './interface'
import styled from 'styled-components'
import DefaultButton from './DefaultButton'

const StyledOutlinedButton = styled(DefaultButton)`
  && {
    background-color: transparent;
    color: white;
    outline: 1px solid hsla(0,0%,100%,.3);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 16px;
    padding: 7px 15px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 2px;
    
    :hover {
      outline-color: #fff;
    }
  }
`

const OutlinedButton: FC<IOutlinedButton> = ({ children, ...props }) => (
  <StyledOutlinedButton {...props}>{children}</StyledOutlinedButton>
)

export default OutlinedButton