import React, { FC } from 'react'
import { useTrackFollowAction } from '../hook'
import styled, { css } from 'styled-components'
import { ITrack } from '../entity'
import { IClassName } from '../../../core/interface'
import IconButton, { IStyledIconButtonProps } from '../../../core/ui/button/IconButton'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

interface IProps extends IClassName {
  isTrackSaved: boolean
  id: ITrack['id']
  withHover?: boolean
}

export const StyledHeartWrapper = styled(IconButton)<{ withHover?: boolean } & IStyledIconButtonProps>`
  margin-right: 16px;

  ${(props) => props.withHover && css`
    opacity: ${props.isActive ? 1 : 0};
  `}
`

const TrackFollow: FC<IProps> = ({ isTrackSaved, id, className, withHover= false }) => {
  const followAction = useTrackFollowAction(isTrackSaved, [id])

  return (
    <StyledHeartWrapper
      height={16}
      width={16}
      className={className}
      onClick={followAction}
      isActive={isTrackSaved}
      withHover={withHover}
    >
      {isTrackSaved ? <FaHeart /> : <FaRegHeart />}
    </StyledHeartWrapper>
  )
}

export default TrackFollow