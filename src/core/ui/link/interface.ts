import { IClassName, IReactChildren } from '../../interface'
import { LinkProps } from 'next/link'

export interface ILinkProps extends IClassName, IReactChildren {
  href: LinkProps['href']
}

export interface IActiveLinkProps extends ILinkProps {
  isActive?: boolean
}