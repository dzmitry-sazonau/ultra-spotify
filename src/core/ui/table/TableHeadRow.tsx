import React, { FC } from 'react'
import { HeaderGroup } from 'react-table'
import styled from 'styled-components'
import TableRow from './TableRow'
import { StyledTableCell } from './TableCell'

const StyledTableHeadRow = styled(TableRow)`
  && {
    height: 36px;
  }
`

export const StyledHeaderCell = styled(StyledTableCell)``

const TableHeadRow: FC<{ headerGroup: HeaderGroup }> = ({ headerGroup }) => (
  <StyledTableHeadRow {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((tableGroup) => (
      <StyledHeaderCell {...tableGroup.getHeaderProps()}>
        {tableGroup.render('Header')}
      </StyledHeaderCell>
    ))}
  </StyledTableHeadRow>
)

export default TableHeadRow