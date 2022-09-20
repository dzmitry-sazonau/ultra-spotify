import { IClassName, IReactChildren } from '../../interface'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'| 'xl';

export type ButtonColor = 'primary' | 'second'

export interface IDefaultButtonProps extends IReactChildren, IClassName {
  size: ButtonSize
  color?: ButtonColor
  disabled?: boolean
  onClick: () => void
}

export interface ICircularButton extends IDefaultButtonProps {}