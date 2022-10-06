import React, { FC } from 'react'
import { IHeaderImageProps } from '../../interface'
import styled, { css } from 'styled-components'

const StyledHeaderWrapper = styled.div`
  display: flex;
  background: linear-gradient(rgb(56, 48, 56) 0, rgba(0, 0, 0, 0.5) 100%);
  padding: 24px 32px;
  cursor: default;
  max-height: 280px;
`

const StyledImageWrapper = styled.div`
  width: 232px;
  height: 232px;
  margin-inline-end: 24px;
`

const StyledImage = styled.img<{ isRounded: boolean }>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  box-shadow: 0 4px 60px rgb(0 0 0 / 50%);

  ${(props) => props.isRounded && css`
    border-radius: 50%;
  `}
 
`

const HeaderElementImage: FC<IHeaderImageProps> = ({ src, children, isRounded = false }) => (
  <StyledHeaderWrapper>
    <StyledImageWrapper>
      <StyledImage src={src} isRounded={isRounded} />
    </StyledImageWrapper>
    {children}
  </StyledHeaderWrapper>
)

export default HeaderElementImage
