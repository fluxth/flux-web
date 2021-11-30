import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnderConstruction from '../components/UnderConstruction'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog - flux.ci</title>
        <meta name="description" content="flux.ci personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />
        <UnderConstruction />
        <Footer />
      </div>
    </>
  )
}

export default Blog
