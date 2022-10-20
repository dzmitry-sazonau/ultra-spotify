import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../../../../core/ui/link/Link'
import { textEllipsis } from '../../../../core/mixins'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import Explicit from '../../../../core/ui/Explicit'
import { IArtist } from '../../../client/entity'
import TrackName from '../TrackName'
import TrackArtists from '../TrackArtists'

export interface IProps {
  image?: string
  name: string
  artists: IArtist[]
  id: string
  explicit: boolean
}

const StyledTrackInfo = styled(StyledTableCell)`
  align-self: start;
  height: 100%;
  min-width: 200px;
`

const StyledSubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledTrackImage = styled.img`
  margin-right: 16px;
  background-color: #282828;
  flex-shrink: 0;
  object-fit: cover;
  object-position: center center;
  user-select: none;
  width: 40px;
  aspect-ratio: auto 40 / 40;
  height: 40px;
`

const StyledTrackTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 8px;
`

const StyledExplicit = styled(Explicit)`
  && {
    margin-right: 8px;
  }
`

const TrackInfo: FC<IProps> = ({ name, artists, image, id, explicit }) => {
  return (
    <StyledTrackInfo>
      {image && <StyledTrackImage src={image} />}

      <StyledTrackTitleWrapper>
        <TrackName id={id} name={name} />

        <StyledSubTitleWrapper>
          {explicit && <StyledExplicit />}
          <TrackArtists artists={artists} />
        </StyledSubTitleWrapper>

      </StyledTrackTitleWrapper>

    </StyledTrackInfo>
  )
}

export default TrackInfo
