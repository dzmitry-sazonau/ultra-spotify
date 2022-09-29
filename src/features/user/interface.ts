export interface IExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface IExternalUrls {
  spotify: string;
}

export interface IFollowers {
  href: string;
  total: number;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}

export interface IUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: IExplicitContent;
  external_urls: IExternalUrls;
  followers: IFollowers;
  href: string;
  id: string;
  images: IImage[];
  product: string;
  type: string;
  uri: string;
}

export type TUserType = 'artist' | 'user'

export interface IUserState {
  currentUser: IUser
}
