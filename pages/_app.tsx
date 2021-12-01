import type { AppProps } from 'next/app'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="/images/cover_og.png" />
        <meta name="description" content="flux.ci personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="main col">
            <Header title="( flux.ci )" {...pageProps} />
            <Component {...pageProps} />
            <Footer {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
