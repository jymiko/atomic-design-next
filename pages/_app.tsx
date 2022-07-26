import '../styles/globals.scss'
// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import UserLayout from '../layouts/default'
import { AuthProvider } from '../context/AuthContext'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
}

const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props
  console.log(Component)

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  return(
    <div>
       <Head>
          <title>{`title`}</title>
        </Head>
        <AuthProvider>
          <div>
            {getLayout(<Component {...pageProps} />)}
          </div>
        </AuthProvider>
    </div>
  )
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default App
