import { useRouter } from 'next/router'
import { getSplitPath } from '../utils'

export function useGetSplitAsPath() {
  const { asPath } = useRouter()

  return getSplitPath(asPath)
}