import NextApp, { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { createGlobalStyle } from 'styled-components'
import { wrapper } from '../core/store'
import { getCurrentUserProfile } from '../features/user/api'
import { setCurrentUser } from '../features/user/slice'
import { parseCookies } from 'nookies'
import { setAuthData } from '../features/auth/slice'
import Sidebar from '../features/sidebar/components'
import InnerLayout from '../core/components/layout/InnerLayout'
import ContentLayout from '../core/components/layout/ContentLayout'
import Header from '../features/header/components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
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

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <GlobalStyle />
      {router.pathname === "/login" ? (
        <Component {...pageProps} />
      ) : (
        <InnerLayout>
          <Sidebar />
          <ContentLayout>
            <Header />
            <Component {...pageProps} />
          </ContentLayout>
        </InnerLayout>
      )}
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
