import React, { FC } from 'react'
import styled from 'styled-components'
import { textEllipsis } from '../../../core/mixins'
import Link from '../../../core/ui/link/Link'
import { IArtist } from '../../client/entity'
import { IClassName } from '../../../core/interface'

interface IProps extends IClassName {
  artists: IArtist[]
}

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

const TrackArtists: FC<IProps> = ({ artists, className }) => (
  <StyledArtistsWrapper className={className}>
    {artists?.map((artist, index) => (
      <React.Fragment key={artist.id}>
        <StyledArtistName href={`/artist/${artist.id}`}>
          {artist.name}
        </StyledArtistName>

        {index !== artists.length - 1 && <span>, </span>}
      </React.Fragment>
    ))}
  </StyledArtistsWrapper>
)

export default TrackArtists
