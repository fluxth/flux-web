import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import * as ga from '../lib/ga'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url)
    }
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_ID}`}
      />
      <Script strategy="lazyOnload" id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga.GA_ID}', {
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
            <div className="deprecation-notice">
              <p>NOTICE:</p>
              This website is now deprecated and may be removed at anytime!
              <br />
              Please visit my updated website at{' '}
              <b>
                <a href="https://thitat.net">https://thitat.net</a>
              </b>
              .
            </div>
            <Component {...pageProps} />
            <Footer {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
