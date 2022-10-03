import { ReactNode, RefObject } from 'react'
import { Column } from 'react-table'
import { TDynamicHiddenColumns } from '../../core/ui/table/interface'

export interface IDynamicCollectionProps<T> extends IIsFullView, IHeaderCollectionProps {
  children: (data: T[]) => ReactNode
  data: T[]
}

export interface IIsFullView {
  isFullView?: boolean
}

export interface IHeaderCollectionProps {
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
  tracks: ITracksShort
  type: string
  uri: string
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

export interface ITrack {
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface ITracksInfo extends IRequestCollectionParams, IRequestCollectionParams{
  items: ITrack[];
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
  tracks: ITracksInfo;
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
  items: IPlaylist[]
}

export interface IPlaylistsCollectionProps extends IIsFullView, IHeaderCollectionProps {
  playlists: IPlaylist[]
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
  playlist: IPlaylist
}

export interface IAlbumsRowCollectionProps extends IIsFullView, IHeaderCollectionProps{
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
  video_thumbnail: IVideoThumbnail;
}

export interface IResponseTrackInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: ITrackInfo[];
}

export interface IPlaylistTracksTableCollectionProps {
  id: string
}

export interface ITracksTableCollectionProps {
  data: ITrackInfo[]
  columns: Column<any>[]
  dynamicHiddenColumns?: TDynamicHiddenColumns
}