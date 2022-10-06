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

export const StyledHeaderCell = styled(StyledTableCell)`
  font-size: 12px;
  color: #b3b3b3;
  font-weight: 500;
  letter-spacing: 1.2px;
  
  :first-child {
    font-size: 16px
  }

  :nth-child(2) {
    justify-self: start;
  }

  :last-child {
    justify-self: end;
    font-size: 16px
  }
`

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