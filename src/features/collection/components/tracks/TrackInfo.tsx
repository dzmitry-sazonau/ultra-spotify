import React, { FC } from 'react'
import { ITrack } from '../../interface'
import styled from 'styled-components'
import Link from '../../../../core/ui/link/Link'
import { textEllipsis } from '../../../../core/mixins'
import { StyledTableCell } from '../../../../core/ui/table/TableCell'

const StyledTrackInfo = styled(StyledTableCell)`
  align-self: start;
  height: 100%;
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
    font-weight: 500;
    color: #b3b3b3;
  }
`

const TrackInfo: FC<{ track: ITrack }> = ({ track }) => {
  return (
    <StyledTrackInfo>
      <StyledTrackImage src={track.album?.images[2].url}/>

      <StyledTrackTitleWrapper>
        <StyledTrackName href={`/track/${track.id}`}>
          {track.name}
        </StyledTrackName>

        <StyledArtistsWrapper>
          {track.artists.map((artist, index) => (
            <React.Fragment key={artist.id}>
              <StyledArtistName href={`/artist/${artist.id}`}>
                {artist.name}
              </StyledArtistName>
              {index !== track.artists.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </StyledArtistsWrapper>
      </StyledTrackTitleWrapper>
    </StyledTrackInfo>
  )
}

export default TrackInfo
