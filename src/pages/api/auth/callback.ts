import type { NextApiRequest, NextApiResponse } from 'next'
import * as querystring from 'querystring'
import request from 'request'
import { setCookie } from 'nookies'

const clientId = process.env.CLIENT_ID || ''
const clientSecret = process.env.CLIENT_SECRET || ''
const redirectUrl = process.env.REDIRECT_URL || ''

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }));
  }

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri: redirectUrl,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, (error: boolean, response: { statusCode: number }, body: { expires: string }) => {
    if (!error && response.statusCode === 200) {
      setCookie({ res }, 'token' , JSON.stringify(body), {
        expires: body.expires,
        path: '/',
      })
      res.redirect('/').end()
    }
  });
}
