import React, { FC } from 'react'
import styled from 'styled-components'
import CurrentTrackInfo from './CurrentTrackInfo'
import PlayerMainControls from './PlayerMainControls'
import PlayerPlaybackBar from './PlayerPlaybackBar'
import PlayerAdditionalControls from './PlayerAdditionalControls'
import { PlayerProvider, usePlayerContext } from '../playerContext'

const StyledPlayer = styled.div`
  height: 96px;
  background-color: #121212;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
`

const StyledCenterWrapper = styled.div`
  max-width: 722px;
  width: 40%;
  display: flex;
  flex-direction: column;
`

const Player: FC = () => {
  const { isActive } = usePlayerContext()

  return (
    <StyledPlayer>
      {isActive && (
        <>
          <CurrentTrackInfo />

          <StyledCenterWrapper>
            <PlayerMainControls />
            <PlayerPlaybackBar />
          </StyledCenterWrapper>

          <PlayerAdditionalControls />
        </>
      )}
    </StyledPlayer>
  )
}

export default () => (
  <PlayerProvider>
    <Player />
  </PlayerProvider>
)
