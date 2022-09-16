import CenteredLayout from '../features/layout/CenteredLayout'
import styled from 'styled-components'
import { useCallback } from 'react'
import { useRouter } from 'next/router'

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledText = styled.span`
  font-size: 32px;
  color: #ffffff;
`

const StyledButton = styled.button` {
  background: #1ed760;
  color: #000000;
  margin-top: 10px;
  line-height: 20px;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 700;
  font-size: 14px;
  border-radius: 500px;
  border: 0;
  padding: 14px 32px;
  cursor: pointer;

  :hover {
    transform: scale(1.04);
    background-color: #1CDF63;
  }
`


const Login = () => {
  const { push } = useRouter()

  const signIn = useCallback(async () => {
    await push('/api/auth/login')
  }, [push])

  return (
    <CenteredLayout>
      <StyledWrap>
        <StyledText>Welcome to my Spotify</StyledText>

        <StyledButton
          type="button"
          onClick={signIn}
        >
          LOG IN
        </StyledButton>
      </StyledWrap>
    </CenteredLayout>
  )
}

export default Login