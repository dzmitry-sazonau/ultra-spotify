import React from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../../collection/api'
import styled from 'styled-components'
import LinksToPlaylistItem from './LinksToPlaylistItem'

const StyledLinksToPlaylistsWrapper = styled.div`
  padding: 8px 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
`

const StyledLinksToPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px 32px 24px;
`

const LinksToPlaylists = () => {
  const { data } = useGetCurrentUserPlaylistsQuery({ offset: 0, limit: 50 })

  return (
    <StyledLinksToPlaylistsWrapper>
      <StyledLinksToPlaylists>
        {data?.items.map((playlist) => (
          <LinksToPlaylistItem
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
          />
        ))}
      </StyledLinksToPlaylists>
    </StyledLinksToPlaylistsWrapper>
  )
}

export default LinksToPlaylists
