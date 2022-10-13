import React, { FC } from 'react'
import ActionPanel from '../actionPanel/ActionPanel'
import { HeartFilled, HeartOutlined, RightOutlined } from '@ant-design/icons'
import CircularButton from '../button/CircularButton'
import styled from 'styled-components'
import DefaultButton from '../button/DefaultButton'

export interface IProps {
  isFollowed?: boolean
  followAction: () => void
}

const StyledCircularButton = styled(CircularButton)`
  font-size: 24px;
  margin-right: 32px;
  color: #000000;
`

const StyledFollowButton = styled(DefaultButton)<{ isFollowed?: boolean }>`
  color: ${(props) => (props.isFollowed ? '#1ed760' : 'hsla(0,0%,100%,.7)')};
  font-size: 32px;

  :hover {
    color: ${(props) => (props.isFollowed ? '#1ed760' : '#ffffff')};
  }
`

const CollectionActionPanel: FC<IProps> = ({
  followAction,
  isFollowed = false,
}) => {
  return (
    <ActionPanel>
      <StyledCircularButton
        size="xl"
        onClick={() => {}}
        color="primary"
      >
        <RightOutlined />
      </StyledCircularButton>

      <StyledFollowButton
        isFollowed={isFollowed}
        onClick={followAction}
      >
        {isFollowed ? <HeartFilled /> : <HeartOutlined />}
      </StyledFollowButton>
    </ActionPanel>
  )
}

export default CollectionActionPanel
