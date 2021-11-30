import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Resume.module.scss'

const openUrl = (url: string) => window.open(url, '_blank')

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - flux.ci</title>
        <meta name="description" content="flux.ci personal website" />
        <link rel="stylesheet" href="https://unpkg.com/98.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="text-center">
        <h2>View Resume</h2>
        <b>Select your flavor:</b>
        <p className="mt-2 mb-5">
          <button className={styles.button} onClick={() => openUrl('/files/coding_resume.pdf')}>
            Coding Resume
          </button>
          <button className={styles.button} onClick={() => openUrl('/files/media_resume.pdf')}>
            Media Resume
          </button>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Resume
