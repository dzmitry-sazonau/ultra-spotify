import React, { FC } from 'react'
import styled, {css} from 'styled-components'
import { Size, IDefaultButtonProps } from './interface'

const sizeMap: { [key in Size]: number } = {
  xs: 16,
  s: 32,
  m: 40,
  l: 48,
  xl: 56,
}

const StyledButtonDefault = styled.button<{
  size: number
}>`
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 0;

  :disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

const DefaultButton: FC<IDefaultButtonProps> = ({
  children,
  size,
  disabled,
}) => {
  return (
    <StyledButtonDefault
      type="button"
      size={sizeMap[size]}
      disabled={disabled}
    >
      {children}
    </StyledButtonDefault>
  )
}

export default DefaultButton
