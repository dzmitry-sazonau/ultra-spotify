import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useDynamicWidth } from '../../hook'
import { IDynamicCollectionProps } from '../../interface'
import HeaderCollection from '../header/HeaderCollection'

const StyledDynamicRowCollection = styled.div<{ column: number; gap: number }>`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(${(props) => props.column}, minmax(0, 1fr));
  gap: ${(props) => props.gap}px;
`

const DynamicRowCollection = <T extends unknown>({
  children,
  data,
  title,
  action,
  isFullView
}: IDynamicCollectionProps<T>) => {
  const { columCount, gap, ref } = useDynamicWidth()

  const memoizedData = useMemo(
    () => data?.slice(0, isFullView ? data.length : columCount),
    [data, columCount]
  )

  return (
    <div>
      <HeaderCollection action={action} title={title} />
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
