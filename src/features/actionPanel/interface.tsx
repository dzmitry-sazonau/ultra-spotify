import { ReactNode } from 'react'
import { TUserType } from '../user/interface'

export interface IActionPanelProps {
  children?: ReactNode
  userType: TUserType
}
