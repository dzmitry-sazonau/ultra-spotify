import { RefObject, useEffect } from 'react'

export const useResizeObserver = (
  ref: RefObject<HTMLDivElement>,
  callback: ResizeObserverCallback
) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(callback)
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [callback])
}

