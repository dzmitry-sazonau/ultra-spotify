import React from 'react'
import ActionPanel from '../../../core/ui/actionPanel/ActionPanel'
import { HeartFilled, HeartOutlined, RightOutlined } from '@ant-design/icons'
import CircularButton from '../../../core/ui/button/CircularButton'
import styled from 'styled-components'
import DefaultButton from '../../../core/ui/button/DefaultButton'
import { usePlaylistFollow } from '../hook'

const StyledCircularButton = styled(CircularButton)`
  font-size: 24px;
  margin-right: 32px;
`

const StyledFollowButton = styled(DefaultButton)<{ isFollowed?: boolean }>`
  color: ${(props) => (props.isFollowed ? '#1ed760' : 'hsla(0,0%,100%,.7)')};
  font-size: 32px;

  :hover {
    color: ${(props) => (props.isFollowed ? '#1ed760' : '#ffffff')};
  }
`

const CollectionActionPanel = () => {
  const { action, isFollowed } = usePlaylistFollow()

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
        onClick={action}
      >
        {isFollowed ? <HeartFilled /> : <HeartOutlined />}
      </StyledFollowButton>
    </ActionPanel>
  )
}

export default CollectionActionPanel
