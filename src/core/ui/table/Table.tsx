import { FC } from 'react'
import { useTableContext, TableProvider } from './TableContext'
import { ITableProviderProps } from './interface'
import styled from 'styled-components'
import TableBody from './TableBody'
import TableHead from './TableHead'

const StyledTable = styled.div`
  height: 100%;
`

const Table: FC = () => {
  const {
    tableInstance: { getTableProps },
    tableRef,
  } = useTableContext()

  return (
    <StyledTable
      ref={tableRef}
      {...getTableProps()}
    >
      <TableHead />
      <TableBody />
    </StyledTable>
  )
}

export default (props: ITableProviderProps) => (
  <TableProvider {...props}>
    <Table />
  </TableProvider>
)
