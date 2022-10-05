import React, { FC } from 'react'
import TracksTableCollection from './TracksTableCollection'
import { Column } from 'react-table'
import { IPlaylistTracksTableCollectionProps } from '../../interface'
import TrackInfo, { StyledArtistName } from './TrackInfo'
import TrackControl, { StyledHeartWrapper } from './TrackControl'
import styled from 'styled-components'
import { StyledTableBodyRow } from '../../../../core/ui/table/TableBodyRow'
import { useGetPlaylistItemsData } from '../../hook'
import { FieldTimeOutlined } from '@ant-design/icons'
import { format } from 'date-fns'
import Link from '../../../../core/ui/link/Link'
import { textEllipsis } from '../../../../core/mixins'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import { StyledHeaderCell } from '../../../../core/ui/table/TableHeadRow'

const StyledAlbumName = styled(Link)`
  && {
    font-size: 14px;
    font-weight: 500;
    ${textEllipsis()}
    color: #a7a7a7;
  }
`

const StyledTableWrapper = styled.div`
  ${StyledHeaderCell} {
    :nth-child(2) {
      justify-self: start;
    }

    :last-child {
      justify-self: end;
    }
  }
  
  ${StyledTableBodyRow} {
    :hover {
      ${StyledHeartWrapper} {
        opacity: 1;
      }
      ${StyledArtistName}, ${StyledAlbumName} {
        color: #ffffff;
      }
    }
  }
`

const columns: Column<any>[] = [
  {
    Header: '#',
    accessor: (_, i: number) => i + 1,
    width: '16px',
    Cell: ({ value }) => <StyledTableCell>{value}</StyledTableCell>
  },
  {
    id: 'info',
    Header: 'TITLE',
    width: '6fr',
    accessor: 'track',
    Cell: ({ value }) => <TrackInfo track={value} />,
  },
  {
    Header: 'ALBUM',
    accessor: 'track.album',
    width: '4fr',
    Cell: ({ value }) => (
      <StyledTableCell>
        <StyledAlbumName href={`/album/${value.id}`}>
          {value.name}
        </StyledAlbumName>
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
    width: 'minmax(120px,1fr)',
    Cell: (all) => <TrackControl trackInfo={all.row.original} />,
  },
]

const dynamicHiddenColumns = {
  small: ['track.album.name', 'added_at'],
  middle: ['added_at'],
  large: [],
}

const PlaylistTracksTableCollection: FC<
  IPlaylistTracksTableCollectionProps
> = ({ id }) => {
  const { isSuccess, data } = useGetPlaylistItemsData(id)

  if (!isSuccess) {
    return <div>Loading...</div>
  }

  return (
    <StyledTableWrapper>
      <TracksTableCollection
        data={data.items}
        columns={columns}
        dynamicHiddenColumns={dynamicHiddenColumns}
      />
    </StyledTableWrapper>
  )
}

export default PlaylistTracksTableCollection
