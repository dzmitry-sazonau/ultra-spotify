import React, { FC } from 'react'
import styled from 'styled-components'
import OutlinedButton from '../../../core/ui/button/OutlinedButton'
import { IActionPanelProps } from '../interface'
import { useFollowing } from '../../user/hook'

const StyledAction = styled.div`
  height: 80px;
  padding: 24px 32px;
`

const ActionPanel: FC<IActionPanelProps> = ({userType, children}) => {
  const { isFollow, action } = useFollowing(userType)

  return (
    <StyledAction>
      {children}
      <OutlinedButton
        size="s"
        onClick={action}
      >
        {isFollow ? 'Following' : 'Follow'}
      </OutlinedButton>
    </StyledAction>
  )
}

export default ActionPanel
