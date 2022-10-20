import React, { FC } from 'react'
import { IDefaultButtonProps } from './interface'
import styled from 'styled-components'
import DefaultButton from './DefaultButton'

export interface IStyledIconButtonProps {
  height?: number
  width?: number
  isActive?: boolean
}

interface IIconButton extends IDefaultButtonProps, IStyledIconButtonProps {}

const StyledIconButton = styled(DefaultButton)<IStyledIconButtonProps>`
  & > :first-child {
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
  }

  color: ${(props) => (props.isActive ? '#1ed760' : 'hsla(0,0%,100%,.7)')};

  :hover {
    color: ${(props) => (props.isActive ? '#1ed760' : '#ffffff')};
  }
`

const IconButton: FC<IIconButton> = ({
  children,
  height = 22,
  width = 22,
  isActive = false,
  ...props
}) => (
  <StyledIconButton
    height={height}
    width={width}
    isActive={isActive}
    {...props}
  >
    {children}
  </StyledIconButton>
)

export default IconButton
