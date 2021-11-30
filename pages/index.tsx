import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import config from '../config'

//import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - flux.ci</title>
        <meta name="description" content="flux.ci personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />
        <h2 className="mb-0">Welcome!</h2>
        <p>
          <Link href="/">flux.ci</Link> is a personal website owned by{' '}
          <b>Thitat Auareesuksakul</b>, a software engineer and audio enthusiast.
        </p>
        <p>
          This nostalgic <b>Web 2.0</b> experience, despite its looks, is powered by the
          futuristic <a target="_blank" rel="noreferrer" href="https://nextjs.org/"><i>NextJS</i></a> framework.
          <br />
          The site is 100% open-source and is available
          at <a target="_blank" rel="noreferrer" href={config.repo.url}>this GitHub repo</a>.
        </p>
        <p>
          <b>Quick Links</b>
          <ul className="mt-0">
            {config.quick_links.map(i => (
              <li key={i.href}><a target="_blank" rel="noreferrer" href={i.href}>{i.name}</a></li>
            ))}
          </ul>
        </p>
        <Footer />
      </div>
    </>
  )
}

export default Home
