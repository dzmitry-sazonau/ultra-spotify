import { IClassName } from '../../interface'

export interface IMenuProps extends IClassName {
  items: IMenuItem[]
  defaultValue?: string
}

export interface IMenuItem {
  text: string
  id: string
  action: () => void
}

export interface IMenuItemProps extends IMenuItem {
  setActive: (id: IMenuItem['id']) => void
  isActive: boolean
}