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

export interface IExternalIds {
  upc: string;
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

export interface IExternalUrls {
  spotify: string;
}

export interface IExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}