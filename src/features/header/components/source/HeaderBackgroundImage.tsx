import React, { FC } from 'react'
import { IHeaderImageProps } from '../../interface'
import styled from 'styled-components'

const StyledBackground = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  contain: strict;
  content-visibility: auto;
  height: 40vh;
  min-height: 340px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledHeaderHover = styled.div`
  height: 40vh;
  min-height: 340px;
  background: linear-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 100%);
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledPlaylistHeaderWrapper = styled.div`
  height: 40vh;
  min-height: 340px;
  color: #fff;
  display: flex;
  max-width: none;
  overflow: hidden;
  padding: 0 32px 24px 32px;
  cursor: default;
`

const HeaderBackgroundImage: FC<IHeaderImageProps> = ({ src, children }) => (
  <>
    <StyledBackground url={src}></StyledBackground>
    <StyledHeaderHover />

    <StyledPlaylistHeaderWrapper>{children}</StyledPlaylistHeaderWrapper>
  </>
)

export default HeaderBackgroundImage
