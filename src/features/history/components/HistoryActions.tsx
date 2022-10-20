import React, { FC } from 'react'
import styled from 'styled-components'
import CircularButton from '../../../core/ui/button/CircularButton'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useHistory } from '../hook'

const StyledHistoryActions = styled.div`
  display: flex;
  gap: 16px;
`

const StyledCircularButton = styled(CircularButton)`
  height: 32px;
  width: 32px;
  
  background-color: #484848;
  color: #ffffff;
`

const HistoryActions: FC = () => {
  const { isDisabledBack, isDisabledForward, back, forward } = useHistory()

  return (
    <StyledHistoryActions>
      <StyledCircularButton
        disabled={isDisabledBack}
        onClick={back}
      >
        <LeftOutlined />
      </StyledCircularButton>

      <StyledCircularButton
        disabled={isDisabledForward}
        onClick={forward}
      >
        <RightOutlined />
      </StyledCircularButton>
    </StyledHistoryActions>
  )
}

export default HistoryActions
