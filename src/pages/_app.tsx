import NextApp, { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { wrapper } from '../core/store'
import { getCurrentUserProfile } from '../features/user/api'
import { setCurrentUser } from '../features/user/slice'
import { parseCookies } from 'nookies'
import { setAuthData } from '../features/auth/slice'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: transparent
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #424040;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #424040;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  try {
    const { token } = parseCookies(context.ctx)
    const authData = JSON.parse(token)

    store.dispatch(setAuthData(authData))

    const data = await store.dispatch(getCurrentUserProfile.initiate()).unwrap()

    store.dispatch(setCurrentUser(data))
  } catch (e) {
    console.error(e)
  }

  return {
    pageProps: {
      ...(await NextApp.getInitialProps(context)).pageProps,
    },
  }
})

export default wrapper.withRedux(App)
