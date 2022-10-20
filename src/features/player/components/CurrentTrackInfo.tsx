import React from 'react'
import { usePlayerContext } from '../playerContext'
import styled from 'styled-components'
import TrackName from '../../track/components/TrackName'
import TrackArtists from '../../track/components/TrackArtists'
import { useGetTrackByIdQuery } from '../../track/api'
import TrackFollow from '../../track/components/TrackFollow'
import { useCheckSavedTrack } from '../../track/hook'

const StyledWrapper = styled.div`
  min-width: 180px;
  width: 30%;
  display: flex;
  align-items: center;
  gap: 14px;
`

const StyledTrackImage = styled.img`
  height: 56px;
  width: 56px;
  background-color: #000;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
`

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CurrentTrackInfo = () => {
  const { currentTrack } = usePlayerContext()
  const { data } = useGetTrackByIdQuery(currentTrack?.id!, {
    skip: !currentTrack?.id,
  })
  const isTrackSaved = useCheckSavedTrack([currentTrack?.id!])(0)

  return (
    <StyledWrapper>
      <StyledTrackImage src={currentTrack?.album.images[0].url} />

      <StyledTitleWrapper>
        <TrackName
          id={currentTrack?.id!}
          name={currentTrack?.name!}
        />
        <TrackArtists artists={data?.artists!} />
      </StyledTitleWrapper>

      <TrackFollow
        isTrackSaved={isTrackSaved}
        id={currentTrack?.id!}
      />
    </StyledWrapper>
  )
}

export default CurrentTrackInfo
