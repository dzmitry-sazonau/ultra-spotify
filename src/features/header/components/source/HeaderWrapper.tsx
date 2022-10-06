import React, { FC } from 'react'
import { IHeaderWrapperProps, THeaderImage } from '../../interface'
import HeaderBackgroundImage from './HeaderBackgroundImage'
import HeaderElementImage from './HeaderElementImage'

const headerImageMap = (type: THeaderImage) => {
  return {
    background: HeaderBackgroundImage,
    element: HeaderElementImage,
  }[type]
}

const HeaderWrapper: FC<IHeaderWrapperProps> = ({
  type,
  src,
  children,
  isRounded,
}) => {
  const HeaderImage = headerImageMap(type)

  return (
    <HeaderImage
      src={src}
      isRounded={isRounded}
    >
      {children}
    </HeaderImage>
  )
}

export default HeaderWrapper
