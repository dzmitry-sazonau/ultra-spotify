export interface IAuthData {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
}
export interface IRefreshToken {
  refresh_token: string;
}


export interface IAuthState {
  authData: IAuthData & IRefreshToken
}