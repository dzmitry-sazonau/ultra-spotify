import { useRef, useState } from 'react'
import { useResizeObserver } from '../../core/hook'
import { middleSizeCard } from './contstans'

export function useDynamicRow() {
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
