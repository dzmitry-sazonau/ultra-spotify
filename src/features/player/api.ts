import { api } from '../../core/store/api'
import { TRepeatModeState } from './entity'

export interface ITransferPlaybackRequest {
  device_ids: string[]
  play?: boolean
}

export interface ITogglePlaybackShuffleRequest {
  state: boolean
  device_id: string
}

export interface ISetRepeatModeRequest {
  state: TRepeatModeState
  device_id: string
}

export interface IStartOrResumePlaybackRequest
  extends Spotify.WebPlaybackInstance {
  context_uri?: string
  position_ms?: string
  position?: number
  uris?: string[]
}

const playerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    transferPlayback: builder.mutation<void, ITransferPlaybackRequest>({
      query: ({ device_ids, play = false }) => {
        return {
          url: '/me/player',
          method: 'PUT',
          body: {
            device_ids,
            play,
          },
        }
      },
    }),
    togglePlaybackShuffle: builder.mutation<
      void,
      ITogglePlaybackShuffleRequest
    >({
      query: ({ state, device_id }) => {
        return {
          url: '/me/player/shuffle',
          method: 'PUT',
          params: { state, device_id },
        }
      },
    }),
    setRepeatMode: builder.mutation<
      void,
      ISetRepeatModeRequest
      >({
      query: ({ state, device_id }) => ({
        url: '/me/player/repeat',
        method: 'PUT',
        params: { state, device_id },
      }),
    }),
    startOrResumePlayback: builder.mutation<
      void,
      IStartOrResumePlaybackRequest
    >({
      query: ({ device_id, uris, context_uri, position_ms, position = 0 }) => ({
        url: '/me/player',
        method: 'PUT',
        params: {
          device_id,
        },
        body: {
          ...(uris
            ? { uris }
            : {
                context_uri,
                offset: {
                  position,
                },
              }),
          position_ms,
        },
      }),
    }),
  }),
})

export const {
  useStartOrResumePlaybackMutation,
  useSetRepeatModeMutation,
  useTransferPlaybackMutation,
  useTogglePlaybackShuffleMutation,
} = playerApi

export const {} = playerApi.endpoints

export default playerApi
