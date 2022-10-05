import React, { FC } from 'react'
import { useTableContext } from './TableContext'
import styled from 'styled-components'
import TableHeadRow from './TableHeadRow'

const StyledTableHead = styled.div`
  position: sticky;
  top: 0;
  background-color: #1a1a1a;
  padding: 0 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
`

const TableHead: FC = () => {
  const {
    tableInstance: { headerGroups },
  } = useTableContext()

  return (
    <StyledTableHead>
      {headerGroups.map((headerGroup) => (
        <TableHeadRow
          key={headerGroup.getHeaderGroupProps().key}
          headerGroup={headerGroup}
        />
      ))}
    </StyledTableHead>
  )
}

export default TableHead
