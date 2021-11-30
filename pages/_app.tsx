import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:image" content="/images/cover_og.png" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="main col">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
