import React, { FC } from 'react'
import { Column } from 'react-table'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import TrackInfo from './TrackInfo'
import { format } from 'date-fns'
import { FieldTimeOutlined } from '@ant-design/icons'
import TrackControl from './TrackControl'
import Table from '../../../../core/ui/table/Table'
import TableWrapper, { StyledLink } from './TableWrapper'
import { ITrackInfo } from '../../entity'

export interface IProps {
  trackInfo: ITrackInfo[]
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
    width: '6fr',
    accessor: 'track',
    Cell: ({ value }) => (
      <TrackInfo
        id={value.id}
        explicit={value.explicit}
        name={value.name}
        artists={value.artists}
        image={value.album.images[2]?.url || ''}
      />
    ),
  },
  {
    Header: 'ALBUM',
    accessor: 'track.album',
    width: '4fr',
    Cell: ({ value }) => (
      <StyledTableCell>
        <StyledLink href={`/album/${value.id}`}>
          {value.name}
        </StyledLink>
      </StyledTableCell>
    ),
  },
  {
    Header: 'DATE ADDED',
    accessor: 'added_at',
    Cell: ({ value }) => (
      <StyledTableCell>{format(new Date(value), 'd MMM, y')}</StyledTableCell>
    ),
    width: '3fr',
  },
  {
    id: 'last',
    Header: () => <FieldTimeOutlined />,
    accessor: (original, index: number) => ({ original, index }),
    width: 'minmax(120px,1fr)',
    Cell: ({ value: { original: { track }, index } }) => (
      <TrackControl
        index={index}
        id={track.id}
        durationMs={track.duration_ms}
      />
    ),
  },
]

const dynamicHiddenColumns = {
  small: ['track.album', 'added_at'],
  middle: ['added_at'],
  large: [],
}

const TracksPlaylistTable: FC<IProps> = ({ trackInfo, checkIsSavedTrack }) => (
  <TableWrapper>
    <Table
      data={trackInfo}
      onRowClick={() => {}}
      columns={columns}
      dynamicHiddenColumns={dynamicHiddenColumns}
      helper={checkIsSavedTrack}
    />
  </TableWrapper>
)

export default TracksPlaylistTable
