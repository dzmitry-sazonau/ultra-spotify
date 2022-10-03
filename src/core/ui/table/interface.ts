import { Column, Row } from 'react-table'
import { TBreakPoints } from '../../interface'

export interface ITableProviderProps {
  columns: Column<any>[]
  data: any[]
  dynamicHiddenColumns?: TDynamicHiddenColumns
  onRowClick?: (row: Row<any>) => void
}

export type TDynamicHiddenColumns = {[key in TBreakPoints]: string[] }