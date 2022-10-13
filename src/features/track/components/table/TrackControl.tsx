import React, { FC } from 'react'
import styled from 'styled-components'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import { msToMinutesAndSeconds } from '../../../../core/utils'
import DefaultButton from '../../../../core/ui/button/DefaultButton'
import { useTableContext } from '../../../../core/ui/table/TableContext'
import { useTrackFollowAction } from '../../hook'

interface IProps {
  index: number
  id: string
  durationMs: number
}

const StyledTrackControl = styled(StyledTableCell)`
  && {
    justify-self: end;
  }
`

export const StyledHeartWrapper = styled(DefaultButton)<{ isSaved: boolean }>`
  color: ${(props) => (props.isSaved ? '#1ed760' : 'hsla(0,0%,100%,.7)')};
  opacity: ${(props) => (props.isSaved ? 1 : 0)};
  font-size: 16px;
  margin-right: 16px;

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

const TrackControl: FC<IProps> = ({ id, index, durationMs }) => {
  const { helper } = useTableContext()
  const isTrackSaved = helper!(index)

  const followAction = useTrackFollowAction(isTrackSaved, [id])

  const { minutes, seconds } = msToMinutesAndSeconds(durationMs)

  return (
    <StyledTrackControl>
      <StyledHeartWrapper
        onClick={followAction}
        isSaved={isTrackSaved}
      >
        {isTrackSaved ? <HeartFilled /> : <HeartOutlined />}
      </StyledHeartWrapper>

      <StyledDuration>
        {minutes}:{seconds}
      </StyledDuration>
    </StyledTrackControl>
  )
}

export default TrackControl
