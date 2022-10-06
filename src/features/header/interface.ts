import { IClassName, IReactChildren } from '../../core/interface'

export interface IHeaderInfoProps extends IReactChildren, IClassName {
  title: string
  name: string
  description?: string
}

export interface IHeaderWrapperProps extends IHeaderImageProps {
  type: THeaderImage
}

export interface IHeaderImageProps extends IReactChildren, IClassName {
  src: string
  isRounded?: boolean
}

export type THeaderImage = 'background' | 'element'