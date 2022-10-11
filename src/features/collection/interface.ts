import {
  IAlbum,
  IArtist,
  ICurrentUserAlbumsItem,
  IArtistInfo,
  IIsFullView,
  IPlaylistWithShortTrack
} from './entity'
import { ReactNode } from 'react'

export interface ITrackInfoProps {
  image?: string
  name: string
  artists: IArtist[]
  id: string
  explicit: boolean
}

export interface ITrackControlProps {
  index: number
  id: string
  durationMs: number
}

export interface IAlbumsCollectionItemProps {
  album: IAlbum
}

export interface IAlbumsCollectionProps extends IIsFullView, ICollectionTitleProps {
  albums: IAlbum[]
}

export interface IArtistsCollectionProps extends IIsFullView, ICollectionTitleProps {
  artists: IArtistInfo[]
}

export interface IArtistsCollectionItemProps {
  artist: IArtistInfo
}

export interface IPlaylistCollectionItemProps {
  playlist: IPlaylistWithShortTrack
}

export interface IDynamicCollectionItemProps {
  title: string
  subtitle: string
  image: string
  link: string
  handleActionClick: () => void
  isImageRounded?: boolean
}

export interface IPlaylistsCollectionProps extends IIsFullView, ICollectionTitleProps {
  playlists: IPlaylistWithShortTrack[]
}

export interface ICollectionTitleProps {
  title: string
  action?: () => void
}

export interface IDynamicCollectionProps<T> extends IIsFullView, ICollectionTitleProps {
  children: (data: T[]) => ReactNode
  data: T[]
}

export interface ICollectionDetailsHeaderProps {
  href: string
  name: string
  followers?: number
  tracks: number,
}

export interface ICollectionActionPanelProps {
  isFollowed?: boolean
  followAction: () => void
}