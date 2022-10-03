import React, { FC } from 'react'
import { Row } from 'react-table'
import styled from 'styled-components'
import { useTableContext } from './TableContext'
import TableRow from './TableRow'

const StyledTableBodyRow = styled(TableRow)``

const StyledCell = styled.div`
  display: flex;
  align-items: center;
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
        <StyledCell {...cell.getCellProps()}>{cell.render('Cell')}</StyledCell>
      ))}
    </StyledTableBodyRow>
  )
}

export default TableBodyRow
