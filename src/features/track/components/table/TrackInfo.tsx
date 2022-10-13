import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../../../../core/ui/link/Link'
import { textEllipsis } from '../../../../core/mixins'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'
import Explicit from '../../../../core/ui/Explicit'
import { IArtist } from '../../../playlist/entity'

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

const StyledTrackName = styled(Link)`
  && {
    align-self: start;
    font-size: 16px;
    font-weight: 500;
    ${textEllipsis()}
  }
`

const StyledArtistsWrapper = styled.span`
  ${textEllipsis()}
`

export const StyledArtistName = styled(Link)`
  && {
    font-size: 14px;
    font-weight: 400;
    color: #b3b3b3;
    line-height: 22.4px;
  }
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
        <StyledTrackName href={`/track/${id}`}>{name}</StyledTrackName>

        <StyledSubTitleWrapper>
          {explicit && <StyledExplicit />}

          <StyledArtistsWrapper>
            {artists.map((artist, index) => (
              <React.Fragment key={artist.id}>
                <StyledArtistName href={`/artist/${artist.id}`}>
                  {artist.name}
                </StyledArtistName>

                {index !== artists.length - 1 && <span>, </span>}
              </React.Fragment>
            ))}
          </StyledArtistsWrapper>

        </StyledSubTitleWrapper>

      </StyledTrackTitleWrapper>

    </StyledTrackInfo>
  )
}

export default TrackInfo
