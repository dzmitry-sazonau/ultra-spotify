import React, { FC } from 'react'
import { useGetPlaylistItemsQuery } from '../../api'
import TracksTableCollection from './TracksTableCollection'
import { Column } from 'react-table'
import { IPlaylistTracksTableCollectionProps } from '../../interface'

const columns: Column<any>[] = [
  {
    Header: '#',
    accessor: (_, i: number) => i + 1,
    width: '16px',
  },
  {
    Header: 'TITLE',
    accessor: 'track.name',
    width: '6fr',
  },
  {
    Header: 'ALBUM',
    accessor: 'track.album.name',
    width: '4fr',
  },
  {
    Header: 'DATE ADDED',
    accessor: 'added_at',
    width: '3fr',
  },
  {
    Header: 'Time',
    accessor: 'track.duration_ms',
    width: 'minmax(120px,3fr)',
  },
]

const dynamicHiddenColumns = {
  small: ['track.album.name', 'added_at'],
  middle: ['added_at'],
  large: []
}

const PlaylistTracksTableCollection: FC<IPlaylistTracksTableCollectionProps> = ({ id }) => {
  const { data } = useGetPlaylistItemsQuery({id, offset: 0, limit: 8,})

  return (
    <TracksTableCollection
      data={data?.items!}
      columns={columns}
      dynamicHiddenColumns={dynamicHiddenColumns}
    />
  )
}

export default PlaylistTracksTableCollection
