import { IFollowers } from '../client/entity'
import {
  IExternalUrls,
  IImage,
  IOwner,
  IRequestCollectionParams,
  IResponseCollectionParams,
} from '../../core/entity'
import { ITracksShort } from '../track/entity'

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

export interface IResponsePlaylistsInfo
  extends IRequestCollectionParams,
    IResponseCollectionParams {
  items: IPlaylistWithShortTrack[]
}

export interface IResponsePlaylist extends IPlaylist {
  external_urls: IExternalUrls
  followers: IFollowers
  tracks: {
    total: IResponseCollectionParams['total']
  }
}
