import React, { FC } from 'react'
import OutlinedButton from '../../../../core/ui/button/OutlinedButton'
import { TClientType } from '../../entity'
import { useFollowing } from '../../hook'
import StyledActionPanel from '../../../../core/ui/actionPanel/ActionPanel'
import { IReactChildren } from '../../../../core/interface'
import styled from 'styled-components'

export interface IProps extends IReactChildren {
  clientType: TClientType
}

const StyledOutlinedButton = styled(OutlinedButton)`
  && {
    height: 32px;
  }
`

const UserActionPanel: FC<IProps> = ({ clientType, children }) => {
  const { isFollow, action } = useFollowing(clientType)

  return (
    <StyledActionPanel>
      {children}
      <StyledOutlinedButton
        onClick={action}
      >
        {isFollow ? 'Following' : 'Follow'}
      </StyledOutlinedButton>
    </StyledActionPanel>
  )
}

export default UserActionPanel
