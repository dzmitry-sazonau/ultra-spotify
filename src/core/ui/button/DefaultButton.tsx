import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { ButtonColor, IDefaultButtonProps } from './interface'
import { buttonSizeMap } from './constants'

const StyledButtonDefault = styled.button<{
  size?: number
  color?: ButtonColor
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  ${(props) => props.size && css`
    height: ${props.size}px;
  `}
  ${(props) => props.color && css`
    background-color: ${props.color === 'primary' ? '#1CDF63' : '#484848'};
  `}

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
  color,
  onClick
}) => {
  return (
    <StyledButtonDefault
      type="button"
      size={size && buttonSizeMap[size]}
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
