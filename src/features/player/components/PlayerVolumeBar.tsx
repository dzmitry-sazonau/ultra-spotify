import React from 'react'
import styled from 'styled-components'
import SliderBar from '../../../core/ui/sliderBar/SliderBar'
import { usePlayerContext } from '../playerContext'
import IconButton from '../../../core/ui/button/IconButton'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

const StyledWrapper = styled.div`
  display: flex;
  flex: 0 1 125px;
  align-items: center;
`

const PlayerVolumeBar = () => {
  const { volumeInPer, setVolume, mute, isMuted } = usePlayerContext()

  return (
    <StyledWrapper>
      <IconButton onClick={mute}>
        { isMuted ? <MdVolumeOff /> : <MdVolumeUp /> }
      </IconButton>

      <SliderBar position={volumeInPer} action={setVolume} />
    </StyledWrapper>
  )
}

export default PlayerVolumeBar