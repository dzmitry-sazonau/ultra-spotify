import React, { FC } from 'react'
import styled from 'styled-components'
import { IDefaultButtonProps } from './interface'

const StyledButtonDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  :disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

const DefaultButton: FC<IDefaultButtonProps> = ({
  children,
  disabled,
  className,
  onClick
}) => {
  return (
    <StyledButtonDefault
      type="button"
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButtonDefault>
  )
}

export default DefaultButton
