import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UnderConstruction from '../components/UnderConstruction'

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - flux.ci</title>
        <meta name="description" content="flux.ci personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Header />
        <h2>View Resume</h2>
        <b>Select your flavor:</b>
        <ul className="mt-0">
          <li>
            <a href="/files/coding_resume.pdf">Coding Resume</a>
          </li>
          <li>
           <a href="/files/media_resume.pdf">Media Resume</a>
         </li>
        </ul>
        <Footer />
      </div>
    </>
  )
}

export default Resume
