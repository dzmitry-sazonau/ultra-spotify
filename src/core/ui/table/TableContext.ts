import { ITableProviderProps, TDynamicHiddenColumns } from './interface'
import { TableInstance, useTable as useReactTable } from 'react-table'
import constate from 'constate'
import { useCallback, useRef } from 'react'
import { useResizeObserver } from '../../hook'
import { breakPoints } from '../../constans'
import { TBreakPoints } from '../../interface'

function useDynamicTableColumns(
  { setHiddenColumns }: TableInstance<any>,
  dynamicHiddenColumns?: TDynamicHiddenColumns
) {
  const tableRef = useRef<HTMLDivElement>(null)

  const callback: ResizeObserverCallback = useCallback((entries) => {
    if (!dynamicHiddenColumns) {
      return
    }

    for (const [key, value] of Object.entries(dynamicHiddenColumns)) {
      if (entries[0].contentRect.width <= breakPoints[key as TBreakPoints]) {
        setHiddenColumns(value)
        break
      }
    }
  }, [])

  useResizeObserver(tableRef, callback)

  return tableRef
}

const useTable = ({
  columns,
  data,
  onRowClick,
  dynamicHiddenColumns,
}: ITableProviderProps) => {
  const tableInstance = useReactTable({ columns, data,  })
  const tableRef = useDynamicTableColumns(tableInstance, dynamicHiddenColumns)

  return {
    tableInstance,
    tableRef,
    onRowClick,
  }
}

export const [TableProvider, useTableContext] = constate(useTable)
