import { IClassName, IReactChildren } from '../../interface'

export type ButtonSize = 'xs' | 's' | 'm' | 'l'| 'xl';

export interface IDefaultButtonProps extends IReactChildren, IClassName {
  disabled?: boolean
  onClick: () => void
}

export interface ICircularButton extends IDefaultButtonProps {}

export interface IOutlinedButton extends IDefaultButtonProps {}