import { IReactChildren } from '../../interface'

export type Size = 'xs' | 's' | 'm' | 'l'| 'xl';

export interface IDefaultButtonProps extends IReactChildren {
  size: Size
  disabled: boolean
}

export interface ICircularButton extends IDefaultButtonProps {}