import React, { FC } from 'react'
import styled from 'styled-components'
import CircularButton from '../../../core/ui/button/CircularButton'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useHistory } from '../hook'

const StyledHistoryActions = styled.div`
  display: flex;
  gap: 16px;
`

const HistoryActions: FC = () => {
  const { isDisabledBack, isDisabledForward, back, forward } = useHistory()

  return (
    <StyledHistoryActions>
      <CircularButton
        disabled={isDisabledBack}
        onClick={back}
        color="second"
        size="s"
      >
        <LeftOutlined />
      </CircularButton>

      <CircularButton
        disabled={isDisabledForward}
        onClick={forward}
        color="second"
        size="s"
      >
        <RightOutlined />
      </CircularButton>
    </StyledHistoryActions>
  )
}

export default HistoryActions
