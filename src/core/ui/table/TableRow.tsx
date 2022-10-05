import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { useTableContext } from './TableContext'
import { IClassName, IReactChildren } from '../../interface'

const StyledTableRow = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-gap: 16px;
  height: 56px;
  padding: 0 16px;
`

const TableRow: FC<{ onClick?: () => void } & IReactChildren & IClassName> = ({
  children,
  className,
}) => {
  const {
    tableInstance: { columns },
  } = useTableContext()

  const gridTemplateColumns = columns
    .filter((columns) => columns.isVisible)
    .map((column) => column.width)
    .join(' ')

  return (
    <StyledTableRow
      className={className}
      gridTemplateColumns={gridTemplateColumns}
    >
      {children}
    </StyledTableRow>
  )
}

export default TableRow
