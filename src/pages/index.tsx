import type { NextPage } from 'next'
import styled from 'styled-components'

const StyledHome = styled.div`
  background-color: #121212;
  height: 100%;
`

const Home: NextPage = () => {
  return <StyledHome>Hello</StyledHome>
}

export default Home
