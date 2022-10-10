import React from 'react'
import { useGetCurrentUserPlaylistsQuery } from '../../../collection/api'
import styled from 'styled-components'
import LinksToPlaylistItem from './LinksToPlaylistItem'

const StyledScrollWrapper = styled.div`
  height: calc(100% - 229px);
  overflow-y: scroll;
`

const StyledLinksToPlaylistsWrapper = styled.div`
  padding: 8px 0;
  height: 100%;
  width: 100%
`

const StyledLinksToPlaylists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
`

const LinksToPlaylists = () => {
  const { data } = useGetCurrentUserPlaylistsQuery({ offset: 0, limit: 50 })

  return (
    <StyledScrollWrapper>
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
    </StyledScrollWrapper>
  )
}

export default LinksToPlaylists
