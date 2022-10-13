import React, { FC } from 'react'
import { Column } from 'react-table'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import TrackInfo from './TrackInfo'
import { FieldTimeOutlined } from '@ant-design/icons'
import TrackControl from './TrackControl'
import Table from '../../../../core/ui/table/Table'
import TableWrapper from './TableWrapper'
import { ITrack } from '../../entity'

interface IProps {
  tracks: ITrack[]
  checkIsSavedTrack: (index: number) => boolean
}

const columns: Column<any>[] = [
  {
    Header: '#',
    accessor: (_, i: number) => i + 1,
    width: '16px',
    Cell: ({ value }) => <StyledTableCell>{value}</StyledTableCell>,
  },
  {
    id: 'info',
    Header: 'TITLE',
    width: '4fr',
    Cell: ({ row: { original } }) => (
      <TrackInfo
        artists={original.artists}
        name={original.name}
        id={original.id}
        explicit={original.explicit}
      />
    ),
  },
  {
    id: 'last',
    Header: () => <FieldTimeOutlined />,
    accessor: (original, index: number) => ({ original, index }),
    width: 'minmax(120px,1fr)',
    Cell: ({ value: { original, index } }) => (
      <TrackControl
        index={index}
        id={original.id}
        durationMs={original.duration_ms}
      />
    ),
  },
]

const TracksAlbumTable: FC<IProps> = ({ tracks, checkIsSavedTrack }) => (
  <TableWrapper>
    <Table
      data={tracks}
      onRowClick={() => {}}
      columns={columns}
      helper={checkIsSavedTrack}
    />
  </TableWrapper>
)

export default TracksAlbumTable
