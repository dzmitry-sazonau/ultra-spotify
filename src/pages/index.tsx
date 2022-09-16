import styled from 'styled-components'
import { NextPageWithLayout } from './_app'
import { getLayout } from '../features/layout/InnerLayout'

const StyledHome = styled.div`
  background-color: #121212;
  height: 100%;
`

const Home: NextPageWithLayout = () => {
  return <StyledHome>Hello</StyledHome>
}

Home.getLayout = getLayout

export default Home
