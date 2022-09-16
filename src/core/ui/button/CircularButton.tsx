import React, { FC } from 'react'
import styled from 'styled-components'
import DefaultButton from './DefaultButton'
import { ICircularButton } from './interface'

const StyledCircularButton = styled(DefaultButton)`
  width: ${(props) => props.size}px;;
`

const CircularButton: FC<ICircularButton> = ({ children, ...props }) => (
  <StyledCircularButton {...props}>{children}</StyledCircularButton>
)

export default CircularButton
