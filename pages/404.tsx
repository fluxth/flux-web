import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BSOD from '../components/BSOD'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - flux.ci</title>
      </Head>
      <BSOD>WEBPAGE_NOT_FOUND</BSOD>
    </>
  )
}

export default NotFound
