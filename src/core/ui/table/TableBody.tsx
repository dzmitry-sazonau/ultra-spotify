import React, { FC } from 'react'
import { useTableContext } from './TableContext'
import TableBodyRow from './TableBodyRow'
import styled from 'styled-components'

const StyledTableBody = styled.div`
  padding: 0 32px;
`

const TableBody: FC = () => {
  const {
    tableInstance: { getTableBodyProps, prepareRow, rows },
  } = useTableContext()

  return (
    <StyledTableBody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <TableBodyRow
            key={row.id}
            row={row}
          />
        )
      })}
    </StyledTableBody>
  )
}

export default TableBody
