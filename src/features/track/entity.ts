import {
  IAddedBy,
  IExternalIds,
  IExternalUrls,
  IRequestCollectionParams,
  IResponseCollectionParams,
  IVideoThumbnail,
} from '../../core/entity'
import { IArtist } from '../client/entity'
import { IAlbum } from '../album/entity'

export interface ITrack {
  artists: IArtist[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: IExternalUrls
  href: string
  id: string
  is_local: boolean
  is_playable: boolean
  name: string
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface IPlaylistTrack extends ITrack {
  album: IAlbum
  episode: boolean
  external_ids: IExternalIds
  popularity: number
  track: boolean
}

export interface ITrackInfo {
  added_at: Date
  added_by: IAddedBy
  is_local: boolean
  primary_color?: any
  track: IPlaylistTrack
  video_thumbnail: IVideoThumbnail
}

export interface IResponsePlaylistTrackInfo
  extends IRequestCollectionParams,
    IResponseCollectionParams {
  items: ITrackInfo[]
}

export interface IResponseAlbumTrackInfo
  extends IRequestCollectionParams,
    IResponseCollectionParams {
  items: ITrack[]
}

export interface ITracksShort {
  href: string
  total: number
}
