import React, { FC } from 'react'
import { useTableContext } from './TableContext'
import TableBodyRow from './TableBodyRow'

const TableBody: FC = () => {
  const {
    tableInstance: { getTableBodyProps, prepareRow, rows },
  } = useTableContext()

  return (
    <div {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <TableBodyRow
            key={row.id}
            row={row}
          />
        )
      })}
    </div>
  )
}

export default TableBody
