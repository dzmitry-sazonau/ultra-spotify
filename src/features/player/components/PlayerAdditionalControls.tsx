import React from 'react'
import styled from 'styled-components'
import PlayerVolumeBar from './PlayerVolumeBar'

const StyledWrapper = styled.div`
  min-width: 180px;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const StyledVolumeWrapper = styled.div`
  width: 30%;
`

const PlayerAdditionalControls = () => (
  <StyledWrapper>
    <StyledVolumeWrapper>
      <PlayerVolumeBar />
    </StyledVolumeWrapper>
  </StyledWrapper>
)

export default PlayerAdditionalControls