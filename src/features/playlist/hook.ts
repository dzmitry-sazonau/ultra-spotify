import {
  useCheckUserFollowPlaylistQuery,
  useFollowPlaylistMutation,
  useUnfollowPlaylistMutation
} from './api'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../core/store/hook'
import { selectCurrentUser } from '../client/selector'

export function usePlaylistFollow() {
  const { query } = useRouter()
  const { id } = useAppSelector(selectCurrentUser)
  const { data } = useCheckUserFollowPlaylistQuery({
    ids: [id],
    playlistId: query.id as string,
  })
  const isFollowed = data?.at(0)

  const [follow] = useFollowPlaylistMutation()
  const [unfollow] = useUnfollowPlaylistMutation()

  return {
    isFollowed,
    action: () => (isFollowed ? unfollow : follow)(query.id as string),
  }
}

