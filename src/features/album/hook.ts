import { useRouter } from 'next/router'
import { useCheckUserFollowAlbumQuery, useFollowAlbumMutation, useUnfollowAlbumMutation } from './api'

export function useAlbumFollow() {
  const { query } = useRouter()
  const { data } = useCheckUserFollowAlbumQuery([query.id as string])
  const isFollowed = data?.at(0)

  const [follow] = useFollowAlbumMutation()
  const [unfollow] = useUnfollowAlbumMutation()

  return {
    isFollowed,
    action: () => (isFollowed ? unfollow : follow)(query.id as string),
  }
}