import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../core/store/hook'
import { selectCurrentUser } from '../selector'

const StyledUserWidget = styled.div`
  border: 0;
  border-radius: 23px;
  background: #000;
  display: flex;
  gap: 8px;
  height: 32px;
  align-items: center;
  padding: 2px;
`

const StyledImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
`

const StyledTitle = styled.span`
  display: block;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  margin-inline-end: 6px;
`

const UserWidget = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <StyledUserWidget>
      <StyledImage src={currentUser.images[0].url} />
      <StyledTitle>{currentUser.display_name}</StyledTitle>
    </StyledUserWidget>
  )
}

export default UserWidget