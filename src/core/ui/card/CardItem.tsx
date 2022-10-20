import React, { FC, memo } from 'react'
import { TCardItemProps } from './interface'
import styled, { css } from 'styled-components'
import CircularButton from '../button/CircularButton'
import { PlayCircleOutlined } from '@ant-design/icons'
import { FaPlay } from 'react-icons/fa'
import PlayIcon from '../icon/Play'

const StyledButtonWrapper = styled.div`
  opacity: 0;
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 2;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  transition: all 0.3s ease;
  border-radius: 500px;
  color: #000000;
  transform: translateY(8px);
`

const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
  background-color: #181818;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  z-index: 1;

  :hover {
    background-color: #282828;

    ${StyledButtonWrapper} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const StyledHeaderWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`

const StyledImg = styled.img`
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  animation: imageFadeInAnimation 0.25s ease;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  border-radius: 4px;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`

const StyledImageWrapper = styled.div<{ isRounded: boolean }>`
  width: 100%;
  padding-bottom: 100%;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  background-color: #333333;
  position: relative;

  ${(props) =>
    props.isRounded && css`
      border-radius: 50%;
      ${StyledImg} {
        border-radius: 50%;
      }
    `}
`

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 62px;
`

const StyledTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-block-end: 4px;
`

const StyledSubtitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a7a7a7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin-top: 4px;
`

const StyledCircularButton = styled(CircularButton)`
  && {
    height: 48px;
    width: 48px;
    background-color: #1CDF63;

    ${PlayIcon} {
      height: 16px;
      width: 16px;
    }
  }
`

const CardItem: FC<TCardItemProps> = ({
  title,
  image,
  subtitle,
  handleActionClick,
  isRounded = false,
}) => {
  return (
    <StyledCard>
      <StyledHeaderWrapper>
        <StyledImageWrapper isRounded={isRounded}>
          <StyledImg src={image} />
        </StyledImageWrapper>

        <StyledButtonWrapper>
          <StyledCircularButton
            onClick={handleActionClick}
          >
            <PlayIcon />
          </StyledCircularButton>
        </StyledButtonWrapper>
      </StyledHeaderWrapper>

      <StyledTextWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledTextWrapper>
    </StyledCard>
  )
}

export default memo(CardItem)
