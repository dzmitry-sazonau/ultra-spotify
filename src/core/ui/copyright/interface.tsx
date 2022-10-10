import { IClassName } from '../../interface'

export interface ICopyright {
  text: string;
  type: string;
}

export interface ICopyrightsProps extends IClassName {
  copyrights: ICopyright[]
  title?: string
}

