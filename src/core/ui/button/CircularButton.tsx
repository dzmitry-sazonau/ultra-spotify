import React, { FC } from 'react'
import styled from 'styled-components'
import DefaultButton from './DefaultButton'
import { ICircularButton } from './interface'
import { buttonSizeMap, iconSizeMap } from './constants'

const StyledCircularButton = styled(DefaultButton)`
  && {
    width: ${(props) => buttonSizeMap[props.size]}px;

    & > span > svg {
      color: ${(props) => props.color === 'primary' ? '000' : '#fff'};
    }
  }
`

const CircularButton: FC<ICircularButton> = ({ children, ...props }) => (
  <StyledCircularButton {...props}>{children}</StyledCircularButton>
)

export default CircularButton
