import React, { FC } from 'react'
import Table from '../../../../core/ui/table/Table'
import { ITracksTableCollectionProps } from '../../interface'

const TracksTableCollection: FC<ITracksTableCollectionProps> = (({ data, columns, dynamicHiddenColumns }) => (
  <Table
    data={data}
    onRowClick={() => {}}
    columns={columns}
    dynamicHiddenColumns={dynamicHiddenColumns}
  />
))

export default TracksTableCollection
