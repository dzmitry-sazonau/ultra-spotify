import React, { FC } from 'react'
import { HeaderGroup } from 'react-table'
import styled from 'styled-components'
import TableRow from './TableRow'

const StyledTableHeadRow = styled(TableRow)``
const StyledHeaderCell = styled.div`
  display: flex;
  align-items: center;
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