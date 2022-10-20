import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../../../core/ui/link/Link'
import { textEllipsis } from '../../../core/mixins'
import { ITrack } from '../entity'
import { IClassName } from '../../../core/interface'

interface IProps extends IClassName {
  id: ITrack['id']
  name: ITrack['name']
}

const StyledTrackName = styled(Link)`
  && {
    align-self: start;
    font-size: 16px;
    font-weight: 500;
    ${textEllipsis()}
  }
`

const TrackName: FC<IProps> = ({ id, name, className }) => (
  <StyledTrackName
    className={className}
    href={`/track/${id}`}
  >
    {name}
  </StyledTrackName>
)

export default TrackName
