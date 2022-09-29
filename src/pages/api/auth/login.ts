import type { NextApiRequest, NextApiResponse } from 'next'
import * as querystring from 'querystring'

const scope = 'user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state user-read-currently-playing user-follow-read user-follow-modify playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative'
const clientId = process.env.CLIENT_ID || ''
const secret = process.env.AUTH_SECRET || ''
const redirectUrl = process.env.REDIRECT_URL || ''

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      state: secret,
      redirect_uri: redirectUrl,
    }));
}
