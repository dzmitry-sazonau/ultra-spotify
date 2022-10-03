import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useTableContext } from './TableContext'

const StyledTableRow = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-gap: 16px;
  height: 56px;
  padding: 0 16px;
`

const TableRow: FC<{ children: ReactNode; onClick?: () => void }> = ({
  children,
}) => {
  const {
    tableInstance: { columns },
  } = useTableContext()

  const gridTemplateColumns = columns.filter((columns) => columns.isVisible).map((column) => column.width).join(' ')

  return (
    <StyledTableRow gridTemplateColumns={gridTemplateColumns}>
      {children}
    </StyledTableRow>
  )
}

export default TableRow
