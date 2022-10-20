import { api } from '../../core/store/api'
import {
  IResponseAlbumTrackInfo,
  IResponsePlaylistTrackInfo, ITrackFull
} from './entity'
import { IRequestCollectionParams } from '../../core/entity'
import { IAlbum } from '../album/entity'
import { IPlaylist } from '../playlist/entity'

const trackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylistItems: builder.query<
      IResponsePlaylistTrackInfo,
      IRequestCollectionParams & { id: IPlaylist['id'] }
      >({
      query: ({ id, offset, limit }) => ({
        url: `/playlists/${id}/tracks`,
        method: 'GET',
        params: { offset, limit, market: 'BY' },
      }),
    }),
    getAlbumItems: builder.query<
      IResponseAlbumTrackInfo,
      IRequestCollectionParams & { id: IAlbum['id'] }
      >({
      query: ({ id, offset, limit }) => ({
        url: `/albums/${id}/tracks`,
        method: 'GET',
        params: { offset, limit, market: 'BY' },
      }),
    }),
    getTrackById: builder.query<ITrackFull, string>({
      query: (id) => ({
        url: `/tracks/${id}`,
        method: 'GET',
        params: { market: 'BY' }
      }),
    }),
    checkUserSavedTracks: builder.query<boolean[], string[]>({
      query: (ids) => ({
        url: `/me/tracks/contains`,
        method: 'GET',
        params: { ids: ids.join(',') },
      }),
      providesTags: ['TrackSaving'],
    }),
    saveTracksForCurrentUser: builder.mutation<void, string[]>({
      query: (ids) => ({
        url: `/me/tracks`,
        method: 'PUT',
        params: { ids },
      }),
      invalidatesTags: ['TrackSaving'],
    }),
    removeTracksForCurrentUser: builder.mutation<void, string[]>({
      query: (ids) => ({
        url: `/me/tracks`,
        method: 'DELETE',
        params: { ids },
      }),
      invalidatesTags: ['TrackSaving'],
    }),
  }),
})

export const {
  useGetTrackByIdQuery,
  useGetPlaylistItemsQuery,
  useCheckUserSavedTracksQuery,
  useSaveTracksForCurrentUserMutation,
  useRemoveTracksForCurrentUserMutation,
  useGetAlbumItemsQuery,
} = trackApi

export const {} = trackApi.endpoints

export default trackApi
