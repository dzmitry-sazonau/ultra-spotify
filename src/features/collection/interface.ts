import { ReactNode } from 'react'
import { TUserType } from '../user/interface'

export interface IDynamicCollectionProps<T> {
  children: (data: T[]) => ReactNode
  data: T[],
  type: TDynamicCollectionType
}

export type TDynamicCollectionType = 'row' | 'table'

export interface IHeaderRowCollectionProps extends IHeaderCollection {
  action: () => void
}

export interface IHeaderCollection {
  children?: ReactNode
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

export interface IPlaylistsCollectionProps {
  playlists: IPlaylist[],
  type?: TDynamicCollectionType
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

export interface IAlbumsRowCollectionProps {
  albums: {
    added_at: Date;
    album: IAlbum;
  }[]
}

export interface IAlbumRowCollectionItemProps {
  album: IAlbum
}