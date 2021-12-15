import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - flux.ci</title>
      </Head>
      <div className="text-center my-5">
        <h2>404 Not Found</h2>
        <p>
          What you&apos;re looking for, is not here.
          <br />[<Link href="/">Back to homepage</Link>]
        </p>
      </div>
    </>
  )
}

export default NotFound
