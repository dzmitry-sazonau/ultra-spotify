import React, { FC } from 'react'
import styled from 'styled-components'
import { IClassName } from '../../interface'

interface Props extends IClassName {
  position: number
  action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const StyledWrapper = styled.div`
  height: 12px;
  position: relative;
  width: 100%;
`

const StyledIndicator = styled.div<{ position: number }>`
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  display: none;
  height: 12px;
  left: ${(props) => props.position}%;
  margin-left: -6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  z-index: 100;
`

const StyledPosition = styled.div<{ position: number }>`
  background-color: #ffffff;
  border-radius: 2px;
  height: 4px;
  transform: translateX(calc(-100% + ${(props) => props.position}%));
  width: 100%;
  touch-action: none;
`

const StyledPlaybackBarWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  touch-action: none;
  width: 100%;

  :hover {
    cursor: pointer;
    ${StyledIndicator} {
      display: block;
    }

    ${StyledPosition} {
      background-color: #1db954;
    }
  }
`

const StyledPlaybackBar = styled.div`
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 2px;
  height: 4px;
  width: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledDuration = styled.div`
  overflow: hidden;
  border-radius: 2px;
  height: 4px;
  width: 100%;
`

const SliderBar: FC<Props> = ({ position, action, className }) => (
  <StyledWrapper className={className}>
    <StyledPlaybackBarWrapper onClick={action}>
      <StyledPlaybackBar>

        <StyledDuration>
          <StyledPosition position={position} />
        </StyledDuration>

        <StyledIndicator position={position} />
      </StyledPlaybackBar>
    </StyledPlaybackBarWrapper>
  </StyledWrapper>
)

export default SliderBar
