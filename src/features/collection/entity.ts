import { IFollowers } from '../user/interface'
import { ICopyright } from '../../core/ui/copyright/interface'

export interface IIsFullView {
  isFullView?: boolean
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

export interface IExternalIds {
  upc: string;
}

export interface IAlbumCurrentUser extends IAlbum {
  copyrights: ICopyright[];
  external_ids: IExternalIds;
  genres: any[];
  label: string;
  popularity: number;
  tracks: ITracksShort;
}

export interface IAlbum {
  available_markets: string[];
  album_group: string;
  album_type: string;
  artists: IArtist[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
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

export interface IResponseCurrentUserAlbums extends IRequestCollectionParams, IResponseCollectionParams {
  items: ICurrentUserAlbumsItem[]
}

export interface ICurrentUserAlbumsItem {
  added_at: Date;
  album: IAlbumCurrentUser;
}

export interface IPlaylistTrack extends ITrack{
  album: IAlbum;
  episode: boolean;
  external_ids: IExternalIds;
  popularity: number;
  track: boolean;
}

export interface ITrack {
  artists: IArtist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
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
  track: IPlaylistTrack;
  video_thumbnail: IVideoThumbnail;
}

export interface IResponsePlaylistTrackInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: ITrackInfo[];
}

export interface IResponseAlbumTrackInfo extends IRequestCollectionParams, IResponseCollectionParams {
  items: ITrack[];
}

export interface IResponsePlaylist extends IPlaylist {
  external_urls: IExternalUrls;
  followers: IFollowers;
  tracks: {
    total: IResponseCollectionParams['total']
  }
}

export interface IResponseAlbum {
  album_type: string;
  artists: IArtist[];
  copyrights: ICopyright[];
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
  tracks: IResponseAlbumTrackInfo;
  type: string;
  uri: string;
}

export interface IResponseArtistAlbum extends IRequestCollectionParams, IResponseCollectionParams {
  items: IAlbum[]
}

