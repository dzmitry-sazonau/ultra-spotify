import { IAlbum, IArtist, ICurrentUserAlbumsItem, IIsFullView, IPlaylistWithShortTrack } from './entity'
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

export interface IAlbumRowCollectionItemProps {
  album: IAlbum
}

export interface IAlbumsRowCollectionProps extends IIsFullView, ICollectionTitleProps{
  albums: IAlbum[]
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