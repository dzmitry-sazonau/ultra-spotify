import { createSelector } from '@reduxjs/toolkit'
import collectionApi from '../collection/api'

export const selectArtistsByAlbumId = (id: string) => createSelector(
  [
    collectionApi.endpoints.getAlbum.select(id)
  ],
  (album) => album?.data?.artists!
)