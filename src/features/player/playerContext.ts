import { useAppSelector } from '../../core/store/hook'
import { selectAccessToken } from '../auth/selector'
import { useCallback, useEffect, useState } from 'react'
import constate from 'constate'
import {
  useSetRepeatModeMutation,
  useTogglePlaybackShuffleMutation,
  useTransferPlaybackMutation,
} from './api'
import { TRepeatModeState } from './entity'

function useShuffle(
  playerState: Spotify.PlaybackState | undefined,
  deviceId: string | undefined
) {
  const [togglePlaybackShuffle] = useTogglePlaybackShuffleMutation()
  const shuffleAction = useCallback(
    () =>
      togglePlaybackShuffle({
        device_id: deviceId!,
        state: !playerState?.shuffle,
      }),
    [deviceId, playerState, togglePlaybackShuffle]
  )

  if (!playerState || !deviceId) {
    return {
      isShuffle: false,
      shuffleAction: () => {},
    }
  }

  return {
    isShuffle: playerState.shuffle,
    shuffleAction,
  }
}

function usePlayPause(
  currentTrack: Spotify.Track | undefined,
  player: Spotify.Player | undefined,
  isPaused: boolean
) {
  const playPauseAction = useCallback(() => player?.togglePlay(), [player])

  if (!currentTrack || !player) {
    return {
      isPaused,
      playPauseAction: () => {},
    }
  }

  return {
    isPaused,
    playPauseAction,
  }
}

function useNextPrevious(player: Spotify.Player | undefined) {
  const nextTrackAction = useCallback(() => player?.nextTrack(), [player])
  const previousTrackAction = useCallback(
    () => player?.previousTrack(),
    [player]
  )

  if (!player) {
    return {
      nextTrackAction: () => {},
      previousTrackAction: () => {},
    }
  }

  return {
    nextTrackAction,
    previousTrackAction,
  }
}

const repeatModes: {
  [key in Spotify.PlaybackState['repeat_mode']]: TRepeatModeState
} = {
  0: 'off',
  1: 'context',
  2: 'track',
}

function getNextRepeatMode(
  activeRepeatMode: Spotify.PlaybackState['repeat_mode']
): Spotify.PlaybackState['repeat_mode'] {
  const keysModes = Object.keys(repeatModes)
  const firstMode = keysModes.at(0)
  const lastMode = keysModes.at(-1)
  console.log(lastMode, 'next')
  console.log(firstMode, 'next')
  return (
    activeRepeatMode + 1 > +lastMode! ? +firstMode! : activeRepeatMode + 1
  ) as Spotify.PlaybackState['repeat_mode']
}

function useRepeatMode(
  player: Spotify.Player | undefined,
  playerState: Spotify.PlaybackState | undefined,
  deviceId: string | undefined
) {
  const [setRepeatMode] = useSetRepeatModeMutation()
  const activeRepeatMode = playerState?.repeat_mode
  const setRepeatModeAction = useCallback(() => {
    setRepeatMode({
      state: repeatModes[getNextRepeatMode(playerState?.repeat_mode!)],
      device_id: deviceId!,
    })
  }, [playerState, setRepeatMode, deviceId])

  if (!playerState || !deviceId) {
    return {
      isOffRepeat: true,
      isTrackRepeat: false,
      setRepeatModeAction: () => {}
    }
  }

  return {
    isOffRepeat: activeRepeatMode === 0,
    isTrackRepeat: activeRepeatMode === 2,
    setRepeatModeAction,
  }
}

function usePlayer() {
  const accessToken = useAppSelector(selectAccessToken)
  const [transferPlayback] = useTransferPlaybackMutation()

  const [isPaused, setPaused] = useState(false)
  const [isActive, setActive] = useState(false)
  const [player, setPlayer] = useState<Spotify.Player>()
  const [playerState, setPlayerState] = useState<Spotify.PlaybackState>()
  const [currentTrack, setCurrentTrack] = useState<Spotify.Track | undefined>()
  const [deviceId, setDeviceId] = useState<string | undefined>()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true
    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Ultra Spotify',
        getOAuthToken: (cb: (accessToken: string) => void) => {
          cb(accessToken)
        },
        volume: 0.5,
      })

      setPlayer(player)

      player.connect()

      player.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id)
        transferPlayback({ device_ids: [device_id!] })
      })

      player.addListener('playback_error', ({ message }) => {
        console.error('Failed to perform playback', message)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          setActive(false)
          return
        }

        setCurrentTrack(state.track_window.current_track)
        setPaused(state.paused)
        setPlayerState(state)


        player.getCurrentState().then((state) => {
          setActive(!!state)
        })
      })
    }
  }, [])

  return {
    ...useShuffle(playerState, deviceId),
    ...useRepeatMode(player, playerState, deviceId),
    ...usePlayPause(currentTrack, player, isPaused),
    ...useNextPrevious(player),
    player,
    isActive,
    currentTrack,
    deviceId,
  }
}

export const [PlayerProvider, usePlayerContext] = constate(usePlayer)
