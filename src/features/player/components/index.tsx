import React, { FC } from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
  height: 60px;
  background-color: #000000;
  grid-column-start: 1;
  grid-column-end: 3;
`

const Player: FC = () => <StyledPlayer>Player</StyledPlayer>

export default Player
