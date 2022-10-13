import {
  IExplicitContent,
  IExternalUrls,
  IImage,
  IRequestCollectionParams,
  IResponseCollectionParams,
} from '../../core/entity'

export interface IFollowers {
  href: string
  total: number
}

export interface IUser {
  country: string
  display_name: string
  email: string
  explicit_content: IExplicitContent
  external_urls: IExternalUrls
  followers: IFollowers
  href: string
  id: string
  images: IImage[]
  product: string
  type: string
  uri: string
}

export type TClientType = 'artist' | 'user'

export interface IArtist {
  external_urls: IExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface IArtistInfo extends IArtist {
  followers: IFollowers
  genres: string[]
  images: IImage[]
  popularity: number
}

export interface IResponseFollowedArtists {
  artists: {
    items: IArtistInfo[]
  } & IRequestCollectionParams &
    IResponseCollectionParams
}
