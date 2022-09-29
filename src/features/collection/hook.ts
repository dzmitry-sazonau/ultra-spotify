import { useMemo, useRef, useState } from 'react'
import { useResizeObserver } from '../../core/hook'
import { middleSizeCard } from './contstans'
import { TDynamicCollectionType } from './interface'

export function useLimitForCollectionByType(type: TDynamicCollectionType) {
  const data = useMemo(() => ({
    'row': 8,
    'table': 50,
  }), [])

  return data[type]
}

export function useDynamicWidth() {
  const [columCount, setColumCount] = useState(0)
  const [gap, setGap] = useState(24)
  const ref = useRef<HTMLDivElement>(null)

  useResizeObserver(ref, (entries) => {
    const cardWithGap = middleSizeCard + gap
    const containerWidth = entries[0].target.clientWidth

    setColumCount(Math.round(containerWidth / cardWithGap))

    if (columCount <= 3) {
      setGap(16)
    }
  })

  return {
    columCount,
    gap,
    ref,
  }
}
