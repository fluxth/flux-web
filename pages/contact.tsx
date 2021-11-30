import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import config from '../config'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Info - flux.ci</title>
        <meta name="description" content="flux.ci personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />
        <div className="text-center">
          <h2>Contact Info</h2>
          <p>
            Contact me via Email:{' '}
            <a href={"mailto:" + config.email}>{config.email}</a>
            <br />
            My PGP public key is{' '}
            <a target="_blank" href={config.pgp.url}>
              {config.pgp.fingerprint}
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact
