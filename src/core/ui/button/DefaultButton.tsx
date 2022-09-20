import React, { FC } from 'react'
import styled from 'styled-components'
import { ButtonColor, IDefaultButtonProps } from './interface'
import { buttonSizeMap } from './constants'

const StyledButtonDefault = styled.button<{
  size: number
  color: ButtonColor
}>`
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 0;
  background-color: ${(props) => props.color === 'primary' ? '#1CDF63' : '#484848'};
  cursor: pointer;

  :disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

const DefaultButton: FC<IDefaultButtonProps> = ({
  children,
  size,
  disabled,
  className,
  color = 'primary',
  onClick
}) => {
  return (
    <StyledButtonDefault
      type="button"
      size={buttonSizeMap[size]}
      disabled={disabled}
      className={className}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButtonDefault>
  )
}

export default DefaultButton
