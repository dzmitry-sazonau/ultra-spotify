import React, { FC } from 'react'
import OutlinedButton from '../../../../core/ui/button/OutlinedButton'
import { IActionPanelProps } from '../../interface'
import { useFollowing } from '../../hook'
import StyledActionPanel from '../../../../core/ui/actionPanel/ActionPanel'

const ActionPanel: FC<IActionPanelProps> = ({userType, children}) => {
  const { isFollow, action } = useFollowing(userType)

  return (
    <StyledActionPanel>
      {children}
      <OutlinedButton
        size="s"
        onClick={action}
      >
        {isFollow ? 'Following' : 'Follow'}
      </OutlinedButton>
    </StyledActionPanel>
  )
}

export default ActionPanel
