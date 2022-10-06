import React, { FC } from 'react'
import styled from 'styled-components'
import { IClassName, IReactChildren } from '../../interface'

const StyledActionPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
`

const ActionPanel: FC<IReactChildren & IClassName> = ({
  className,
  children,
}) => <StyledActionPanel className={className}>{children}</StyledActionPanel>

export default ActionPanel
