import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request'

const clientId = process.env.CLIENT_ID || ''
const clientSecret = process.env.CLIENT_SECRET || ''

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const refresh_token = req.query.refresh_token

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' + new Buffer(clientId + ':' + clientSecret).toString('base64'),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  }

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token

      res.statusCode = 200
      res.json({
        access_token,
      })
    } else {
      res.statusCode = 401
      res.end()
    }
  })
}
