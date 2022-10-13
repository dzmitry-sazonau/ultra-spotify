import React, { ReactNode, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import CollectionTitle, { ICollectionTitleProps } from './CollectionTitle'
import { useResizeObserver } from '../../hook'

export interface IIsFullView {
  isFullView?: boolean
}

interface IProps<T> extends IIsFullView, ICollectionTitleProps {
  children: (data: T[]) => ReactNode
  data: T[]
}

const StyledDynamicRowCollection = styled.div<{ column: number; gap: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${(props) => props.column}, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;
`

const middleSizeCard = 200

export function useDynamicWidth() {
  const [columCount, setColumCount] = useState(8)
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

const DynamicRowCollection = <T extends unknown>({
  children,
  data,
  title,
  action,
  isFullView,
}: IProps<T>) => {
  const { columCount, gap, ref } = useDynamicWidth()

  const memoizedData = useMemo(
    () => data?.slice(0, isFullView ? data.length : columCount),
    [data, columCount]
  )

  return (
    <div>
      <CollectionTitle
        action={action}
        title={title}
      />

      <StyledDynamicRowCollection
        ref={ref}
        column={columCount}
        gap={gap}
      >
        {children(memoizedData)}
      </StyledDynamicRowCollection>
    </div>
  )
}

export default DynamicRowCollection
