import React, { FC } from 'react'
import { useTableContext } from './TableContext'
import styled from 'styled-components'
import TableHeadRow from './TableHeadRow'

const StyledTableHead = styled.div`
  position: sticky;
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
