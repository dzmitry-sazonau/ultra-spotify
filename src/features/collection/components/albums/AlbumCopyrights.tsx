import React from 'react'
import styled from 'styled-components'
import Copyrights from '../../../../core/ui/copyright/Copyrights'
import { useGetAlbumQuery } from '../../api'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

const StyledCopyrights = styled(Copyrights)`
  && {
    margin-top: 32px;
    padding: 0 32px;
    color: #b3b3b3;
  }
`

const AlbumCopyrights = () => {
  const { query } = useRouter()
  const { data, isSuccess } = useGetAlbumQuery(query.id as string)

  if (!isSuccess) {
    return <></>
  }

  return (
    <StyledCopyrights
      copyrights={data?.copyrights!}
      title={format(new Date(data?.release_date!), 'MMM d, y')}
    />
  )
}

export default AlbumCopyrights
