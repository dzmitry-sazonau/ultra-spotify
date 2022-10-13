import { createSelector } from '@reduxjs/toolkit'
import albumApi from './api'

export const selectArtistsByAlbumId = (id: string) => createSelector(
  [
    albumApi.endpoints.getAlbum.select(id)
  ],
  (album) => album?.data?.artists!
)