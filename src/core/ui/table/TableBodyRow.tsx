import React, { FC } from 'react'
import { Row } from 'react-table'
import styled from 'styled-components'
import { useTableContext } from './TableContext'
import TableRow from './TableRow'

export const StyledTableBodyRow = styled(TableRow)`
  && {
    border: 1px solid transparent;
    border-radius: 4px;
    color: #a7a7a7;

    :hover {
      background-color: hsla(0, 0%, 100%, 0.1);
    }
  }
`

const TableBodyRow: FC<{ row: Row }> = ({ row }) => {
  const {
    tableInstance: { prepareRow },
    onRowClick,
  } = useTableContext()
  prepareRow(row)

  return (
    <StyledTableBodyRow
      {...row.getRowProps()}
      onClick={() => onRowClick?.(row)}
    >
      {row.cells.map((cell) => (
        <>{cell.render('Cell')}</>
      ))}
    </StyledTableBodyRow>
  )
}

export default TableBodyRow
