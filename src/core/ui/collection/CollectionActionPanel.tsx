import React, { FC } from 'react'
import ActionPanel from '../actionPanel/ActionPanel'
import { HeartFilled, HeartOutlined, RightOutlined } from '@ant-design/icons'
import CircularButton from '../button/CircularButton'
import styled from 'styled-components'
import DefaultButton from '../button/DefaultButton'
import IconButton from '../button/IconButton'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import PlayIcon from '../icon/Play'

export interface IProps {
  isFollowed?: boolean
  followAction: () => void
}

const StyledCircularButton = styled(CircularButton)`
  height: 56px;
  width: 56px;
  margin-right: 32px;
  color: #000000;
  background-color: #1CDF63;

  ${PlayIcon} {
    height: 20px;
    width: 20px;
  }
`

const CollectionActionPanel: FC<IProps> = ({
  followAction,
  isFollowed = false,
}) => {
  return (
    <ActionPanel>
      <StyledCircularButton
        onClick={() => {}}
      >
        <PlayIcon />
      </StyledCircularButton>

      <IconButton
        height={32}
        width={32}
        isActive={isFollowed}
        onClick={followAction}
      >
        {isFollowed ? <FaHeart /> : <FaRegHeart />}
      </IconButton>
    </ActionPanel>
  )
}

export default CollectionActionPanel
