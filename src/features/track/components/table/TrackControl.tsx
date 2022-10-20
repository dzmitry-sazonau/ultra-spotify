import React, { FC } from 'react'
import styled from 'styled-components'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import { msToMinutesAndSeconds } from '../../../../core/utils'
import { useTableContext } from '../../../../core/ui/table/TableContext'
import TrackFollow from '../TrackFollow'

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

const StyledDuration = styled.span`
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  color: #a7a7a7;
  font-weight: 500;
`

const TrackControl: FC<IProps> = ({ id, index, durationMs }) => {
  const { helper } = useTableContext()
  const isTrackSaved = helper!(index)

  const { minutes, seconds } = msToMinutesAndSeconds(durationMs)

  return (
    <StyledTrackControl>
      <TrackFollow
        isTrackSaved={isTrackSaved}
        id={id}
        withHover
      />
      <StyledDuration>
        {minutes}:{seconds}
      </StyledDuration>
    </StyledTrackControl>
  )
}

export default TrackControl
