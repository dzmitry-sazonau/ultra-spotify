import React, { FC, useCallback } from 'react'
import { IMenuItemProps } from './interface'
import styled from 'styled-components'

const StyledMenuItem = styled.div<{ isActive: boolean }>`
  font-size: 14px;
  color: #ffffff;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>  props.isActive ? '#333' : 'transparent'};
  cursor: pointer;
`

const MenuItem: FC<IMenuItemProps> = ({
  setActive,
  action,
  id,
  text,
  isActive,
}) => {
  const handlerClick = useCallback(() => {
    setActive(id)
    action()
  }, [action, setActive, id])

  return (
    <StyledMenuItem
      onClick={handlerClick}
      isActive={isActive}
    >
      {text}
    </StyledMenuItem>
  )
}

export default MenuItem
