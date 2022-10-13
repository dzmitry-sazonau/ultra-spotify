import { ICopyright } from '../../core/ui/copyright/interface'
import {
  IExternalIds,
  IExternalUrls,
  IImage,
  IRequestCollectionParams,
  IResponseCollectionParams,
} from '../../core/entity'
import { IResponseAlbumTrackInfo, ITracksShort } from '../track/entity'
import { IArtist } from '../client/entity'

export interface IResponseAlbum {
  album_type: string
  artists: IArtist[]
  copyrights: ICopyright[]
  external_ids: IExternalIds
  external_urls: IExternalUrls
  genres: any[]
  href: string
  id: string
  images: IImage[]
  label: string
  name: string
  popularity: number
  release_date: string
  release_date_precision: string
  total_tracks: number
  tracks: IResponseAlbumTrackInfo
  type: string
  uri: string
}

export interface IResponseArtistAlbum
  extends IRequestCollectionParams,
    IResponseCollectionParams {
  items: IAlbum[]
}

export interface IAlbumCurrentUser extends IAlbum {
  copyrights: ICopyright[]
  external_ids: IExternalIds
  genres: any[]
  label: string
  popularity: number
  tracks: ITracksShort
}

export interface IAlbum {
  available_markets: string[]
  album_group: string
  album_type: string
  artists: IArtist[]
  external_urls: IExternalUrls
  href: string
  id: string
  images: IImage[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface IResponseCurrentUserAlbums
  extends IRequestCollectionParams,
    IResponseCollectionParams {
  items: ICurrentUserAlbumsItem[]
}

export interface IResponseCurrentUserAlbumsPrepared
  extends Omit<IResponseCurrentUserAlbums, 'items'> {
  items: IAlbumCurrentUser[]
}

export interface ICurrentUserAlbumsItem {
  added_at: Date
  album: IAlbumCurrentUser
}
