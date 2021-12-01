import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.scss'

const GA_ID = 'G-0KXE0067PX'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script strategy="lazyOnload" id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
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
