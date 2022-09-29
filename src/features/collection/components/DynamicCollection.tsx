import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useDynamicWidth } from '../hook'
import { IDynamicCollectionProps } from '../interface'

const StyledPlaylistWrapper = styled.div<{ column: number; gap: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${(props) => props.column}, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;
`

const DynamicCollection = <T extends unknown>({
  children,
  data,
  type
}: IDynamicCollectionProps<T>) => {
  const { columCount, gap, ref } = useDynamicWidth()

  const memoizedData = useMemo(
    () => data?.slice(0, type === 'table' ? data.length : columCount),
    [data, columCount]
  )

  return (
    <StyledPlaylistWrapper
      ref={ref}
      column={columCount}
      gap={gap}
    >
      {children(memoizedData)}
    </StyledPlaylistWrapper>
  )
}

export default DynamicCollection
