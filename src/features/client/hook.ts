import { TClientType } from './entity'
import { useRouter } from 'next/router'
import {
  useCheckIfUserFollowsQuery,
  useFollowArtistOrUserMutation,
  useUnfollowArtistOrUserMutation,
} from './api'

export function useFollowing(type: TClientType) {
  const { query } = useRouter()
  const { data } = useCheckIfUserFollowsQuery({
    type,
    ids: [query.id as string],
  })
  const [follow] = useFollowArtistOrUserMutation()
  const [unfollow] = useUnfollowArtistOrUserMutation()

  const isFollow = data && data[0]

  return {
    isFollow: data && data[0],
    action: () =>
      (isFollow ? unfollow : follow)({ type, ids: [query.id as string] }),
  }
}
