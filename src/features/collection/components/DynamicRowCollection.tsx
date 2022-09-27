import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useDynamicRow } from '../hook'
import { IDynamicRowCollectionProps } from '../interface'

const StyledPlaylistWrapper = styled.div<{ column: number; gap: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${(props) => props.column}, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;
`

const DynamicRowCollection = <T extends unknown>({
  children,
  data,
}: IDynamicRowCollectionProps<T>) => {
  const { columCount, gap, ref } = useDynamicRow()

  const memoizedData = useMemo(
    () => data?.slice(0, columCount),
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

export default DynamicRowCollection
