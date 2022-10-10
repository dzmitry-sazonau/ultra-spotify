import { IImage } from './entity'

export const getLastImageSrc = (images: IImage[]) => {
  if (!images) {
    return ''
  }

  return images.at(-1)?.url
}