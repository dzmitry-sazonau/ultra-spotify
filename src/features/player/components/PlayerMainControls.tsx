import React from 'react'
import { usePlayerContext } from '../playerContext'
import styled from 'styled-components'
import CircularButton from '../../../core/ui/button/CircularButton'
import PlayIcon from '../../../core/ui/icon/Play'
import PauseIcon from '../../../core/ui/icon/Pause'
import {
  MdSkipPrevious,
  MdSkipNext,
  MdShuffle,
  MdRepeat,
  MdRepeatOne,
} from 'react-icons/md'
import IconButton from '../../../core/ui/button/IconButton'

const StyledWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const StyledPlayPauseButton = styled(CircularButton)`
  && {
    width: 32px;
    height: 32px;

    background-color: #ffffff;
    color: #000000;

    ${PauseIcon}, ${PlayIcon} {
      height: 12px;
      width: 12px;
    }
  }
`

const PlayerMainControls = () => {
  const {
    isOffRepeat,
    isTrackRepeat,
    setRepeatModeAction,
    nextTrackAction,
    previousTrackAction,
    playPauseAction,
    isPaused,
    isShuffle,
    shuffleAction,
  } = usePlayerContext()

  return (
    <StyledWrapper>
      <IconButton
        isActive={isShuffle}
        onClick={shuffleAction}
      >
        <MdShuffle />
      </IconButton>

      <IconButton onClick={previousTrackAction}>
        <MdSkipPrevious />
      </IconButton>

      <StyledPlayPauseButton onClick={playPauseAction}>
        {isPaused ? <PlayIcon /> : <PauseIcon />}
      </StyledPlayPauseButton>

      <IconButton onClick={nextTrackAction}>
        <MdSkipNext />
      </IconButton>

      <IconButton
        isActive={!isOffRepeat}
        onClick={setRepeatModeAction}
      >
        {isTrackRepeat ? <MdRepeatOne /> : <MdRepeat />}
      </IconButton>
    </StyledWrapper>
  )
}

export default PlayerMainControls
