import '../styles/globals.scss'

// ** Next Imports
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
}

const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props
  
  return(
    <div>
       <Head>
          <title>{`title`}</title>
        </Head>
        <AuthProvider>
          <div>
            <Component {...pageProps} />
          </div>
        </AuthProvider>
    </div>
  )
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default App
