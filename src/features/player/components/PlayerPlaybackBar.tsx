import React from 'react'
import styled from 'styled-components'
import { usePlayerContext } from '../playerContext'
import SliderBar from '../../../core/ui/sliderBar/SliderBar'

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

const StyledPlaybackTimestamp = styled.div`
  font-size: 12px;
  color: #a7a7a7;
  min-width: 40px;
  margin-block: 0;
  line-height: 17.6px;
  font-variant-numeric: tabular-nums;
`

const StyledPosition = styled(StyledPlaybackTimestamp)`
  && {
    text-align: right;
  }
`

const StyledDuration = styled(StyledPlaybackTimestamp)`
  && {
    text-align: left;
  }
`

const PlayerPlaybackBar = () => {
  const { positionInSec, positionInPer, seekToPosition, durationInSec } = usePlayerContext()

  return (
    <StyledWrapper>
      <StyledPosition>
        {positionInSec.minutes}:{positionInSec.seconds}
      </StyledPosition>

      <SliderBar
        position={positionInPer}
        action={seekToPosition}
      />

      <StyledDuration>
        {durationInSec.minutes}:{durationInSec.seconds}
      </StyledDuration>
    </StyledWrapper>
  )
}

export default PlayerPlaybackBar
