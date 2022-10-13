import React, { FC } from 'react'
import OutlinedButton from '../../../../core/ui/button/OutlinedButton'
import { TClientType } from '../../entity'
import { useFollowing } from '../../hook'
import StyledActionPanel from '../../../../core/ui/actionPanel/ActionPanel'
import { IReactChildren } from '../../../../core/interface'

export interface IProps extends IReactChildren {
  clientType: TClientType
}

const UserActionPanel: FC<IProps> = ({ clientType, children }) => {
  const { isFollow, action } = useFollowing(clientType)

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

export default UserActionPanel
