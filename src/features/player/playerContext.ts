import { useAppSelector } from '../../core/store/hook'
import { selectAccessToken } from '../auth/selector'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import constate from 'constate'
import {
  useSeekToPositionMutation,
  useSetPlaybackVolumeMutation,
  useSetRepeatModeMutation,
  useTogglePlaybackShuffleMutation,
  useTransferPlaybackMutation,
} from './api'
import { TRepeatModeState } from './entity'
import { msToMinutesAndSeconds } from '../../core/utils'

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
      setRepeatModeAction: () => {},
    }
  }

  return {
    isOffRepeat: activeRepeatMode === 0,
    isTrackRepeat: activeRepeatMode === 2,
    setRepeatModeAction,
  }
}

const getCurrentPositionInPercent = (position: number, duration: number) =>
  (100 * position) / duration

function usePosition(
  position: number,
  setPosition: React.Dispatch<React.SetStateAction<number>>,
  playerState: Spotify.PlaybackState | undefined,
  deviceId: string | undefined
) {
  const [seekToPosition] = useSeekToPositionMutation()

  useEffect(() => {
    if (!playerState?.paused) {
      const interval = setInterval(() => {
        setPosition((position) => position + 1000)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [playerState?.paused])

  return {
    positionInSec: useMemo(() => msToMinutesAndSeconds(position), [position]),
    durationInSec: useMemo(
      () => msToMinutesAndSeconds(playerState?.duration!),
      [playerState?.duration]
    ),
    positionInPer: useMemo(
      () => getCurrentPositionInPercent(position, playerState?.duration!),
      [position, playerState?.duration]
    ),
    seekToPosition: useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        const { left, width } = event.currentTarget.getBoundingClientRect()
        const positionPercent = (100 * (event.clientX - left)) / width

        seekToPosition({
          position_ms: Math.round(
            (positionPercent * playerState?.duration!) / 100
          ),
          device_id: deviceId!,
        })
      },
      [playerState, deviceId]
    ),
  }
}

function useVolume(
  volume: number,
  setVolume: React.Dispatch<React.SetStateAction<number>>,
  player: Spotify.Player | undefined
) {
  return {
    volumeInPer: useMemo(() => volume * 100, [volume]),
    isMuted: useMemo(() => volume === 0, [volume]),
    setVolume: useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        const { left, width } = event.currentTarget.getBoundingClientRect()

        player?.setVolume((event.clientX - left) / width).then(() => {
          setVolume((event.clientX - left) / width)
        })
      },
      [player, setVolume]
    ),
    mute: useCallback(() => {
      player?.setVolume(volume !== 0 ? 0 : 0.5).then(() => {
        setVolume(volume !== 0 ? 0 : 0.5)
      })
    }, [player, setVolume, volume]),
  }
}

function usePlayer() {
  const accessToken = useAppSelector(selectAccessToken)
  const [transferPlayback] = useTransferPlaybackMutation()

  const [isPaused, setPaused] = useState(false)
  const [isActive, setActive] = useState(false)
  const [player, setPlayer] = useState<Spotify.Player>()
  const [position, setPosition] = useState(0)
  const [volume, setVolume] = useState(0)
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

      player.getVolume().then((volume) => {
        setVolume(volume)
      })

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          setActive(false)
          return
        }

        setCurrentTrack(state.track_window.current_track)
        setPaused(state.paused)
        setPlayerState(state)
        setPosition(state.position)

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
    ...usePosition(position, setPosition, playerState, deviceId),
    ...useVolume(volume, setVolume, player),
    isActive,
    currentTrack,
    deviceId,
  }
}

export const [PlayerProvider, usePlayerContext] = constate(usePlayer)
