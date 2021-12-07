import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SendEmailImage from '../assets/images/sendemail.gif'

import ExtLink from '../components/ExtLink'
import PGPDialog, { type PGPData } from '../components/PGPDialog'

import config from '../_data/config.json'

type Props = {
  email: string
  pgp: PGPData
}

export const getStaticProps: GetStaticProps = async () => {
  const pgpFetch = await fetch(config.pgp.url)
  if (!pgpFetch.ok) throw 'PGP Fetch Failed'

  return {
    props: {
      email: config.email,
      pgp: { ...config.pgp, content: await pgpFetch.text() },
    }
  }
}

const Contact: NextPage<Props> = ({ email, pgp }) => {
  return (
    <>
      <Head>
        <title>Contact Info - flux.ci</title>
      </Head>
      <div className="text-center">
        <h2>Contact Info</h2>
        <ExtLink href={"mailto:" + email}>
          <Image src={SendEmailImage} alt="Send Email" unoptimized={true} />
        </ExtLink>
        <p>
          Contact me via E-mail:{' '}
          <ExtLink href={"mailto:" + email}>{email}</ExtLink>
          <br />
          My PGP public key is{' '}
          <PGPDialog pgp={pgp}>
            <a href="#pgp" onClick={(e) => e.preventDefault()}>
              {pgp.fingerprint}
            </a>
          </PGPDialog>
        </p>
      </div>
    </>
  )
}

export default Contact
