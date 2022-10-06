import React, { FC } from 'react'
import { ITrackInfo } from '../../interface'
import styled from 'styled-components'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import { msToMinutesAndSeconds } from '../../../../core/utils'
import { useTrackFollowAction } from '../../hook'
import DefaultButton from '../../../../core/ui/button/DefaultButton'

const StyledTrackControl = styled(StyledTableCell)`
  && {
    justify-content: space-between;
  }
`

export const StyledHeartWrapper = styled(DefaultButton)<{ isSaved: boolean }>`
  color: ${(props) => (props.isSaved ? '#1ed760' : 'hsla(0,0%,100%,.7)')};
  opacity: ${(props) => (props.isSaved ? 1 : 0)};
  font-size: 16px;

  :hover {
    color: ${(props) => (props.isSaved ? '#1ed760' : '#ffffff')};
  }
`

const StyledDuration = styled.span`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  color: #a7a7a7;
  font-weight: 500;
`

const TrackControl: FC<{ trackInfo: ITrackInfo }> = ({ trackInfo }) => {
  const followAction = useTrackFollowAction(trackInfo.isSaved, [
    trackInfo.track.id,
  ])
  const { minutes, seconds } = msToMinutesAndSeconds(
    trackInfo.track.duration_ms
  )

  return (
    <StyledTrackControl>
      <StyledHeartWrapper
        onClick={followAction}
        isSaved={trackInfo.isSaved}
      >
        {trackInfo.isSaved ? <HeartFilled /> : <HeartOutlined />}
      </StyledHeartWrapper>

      <StyledDuration>
        {minutes}:{seconds}
      </StyledDuration>
    </StyledTrackControl>
  )
}

export default TrackControl
