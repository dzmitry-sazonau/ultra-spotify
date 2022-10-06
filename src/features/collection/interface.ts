import { ReactNode } from 'react'
import { IFollowers } from '../user/interface'

export interface IDynamicCollectionProps<T> extends IIsFullView, ICollectionTitleProps {
  children: (data: T[]) => ReactNode
  data: T[]
}

export interface IIsFullView {
  isFullView?: boolean
}

export interface ICollectionTitleProps {
  title: string
  action?: () => void
}

export interface IImage {
  height?: any
  url: string
  width?: any
}

export interface IOwner {
  display_name: string
  href: string
  id: string
  type: string
  uri: string
}

export interface ITracksShort {
  href: string
  total: number
}

export interface IPlaylist {
  collaborative: boolean
  description: string
  href: string
  id: string
  images: IImage[]
  name: string
  owner: IOwner
  primary_color?: any
  public: boolean
  snapshot_id: string
  type: string
  uri: string
}

export interface IPlaylistWithShortTrack extends IPlaylist {
  tracks: ITracksShort
}


export interface IExternalUrls {
  spotify: string;
}

export interface IArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface IExternalIds {
  upc: string;
}

export interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  copyrights: Copyright[];
  external_ids: IExternalIds;
  external_urls: IExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: IImage[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: ITracksShort;
  type: string;
  uri: string;
}

export interface IRequestCollectionParams {
  limit?: number
  offset?: number
}

export interface IResponseCollectionParams {
  href: string
  next: string
  previous?: any
  total: number
}

export interface IResponsePlaylistsInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: IPlaylistWithShortTrack[]
}

export interface IPlaylistsCollectionProps extends IIsFullView, ICollectionTitleProps {
  playlists: IPlaylistWithShortTrack[]
}

export interface IResponseAlbumsInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: {
    added_at: Date;
    album: IAlbum;
  }[]
}

export interface IDynamicCollectionItemProps {
  title: string
  subtitle: string
  image: string
  link: string
  handleActionClick: () => void
}

export interface IPlaylistCollectionItemProps {
  playlist: IPlaylistWithShortTrack
}

export interface IAlbumsRowCollectionProps extends IIsFullView, ICollectionTitleProps{
  albums: {
    added_at: Date;
    album: IAlbum;
  }[]
}

export interface IAlbumRowCollectionItemProps {
  album: IAlbum
}

export interface ITrack {
  album: IAlbum;
  artists: IArtist[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: IExternalIds;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export interface IVideoThumbnail {
  url?: any;
}

export interface IAddedBy {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface ITrackInfo {
  added_at: Date;
  added_by: IAddedBy;
  is_local: boolean;
  primary_color?: any;
  track: ITrack;
  isSaved: boolean;
  video_thumbnail: IVideoThumbnail;
}

export interface IResponsePlaylistTrackInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: ITrackInfo[];
}

export interface IResponsePlaylist extends IPlaylist {
  external_urls: IExternalUrls;
  followers: IFollowers;
  tracks: {
    total: IResponseCollectionParams['total']
  }
}

export interface ICollectionDetailsHeaderProps {
  href: string
  name: string
  followers: number
  tracks: number
}