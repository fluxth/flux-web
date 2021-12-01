import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SendEmailImage from '../assets/images/sendemail.gif'

import ExtLink from '../components/ExtLink'

import { EMAIL, PGP } from '../config'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Info - flux.ci</title>
      </Head>
      <div className="text-center">
        <h2>Contact Info</h2>
        <ExtLink href={"mailto:" + EMAIL}>
          <Image src={SendEmailImage} alt="Send Email" unoptimized={true} />
        </ExtLink>
        <p>
          Contact me via E-mail:{' '}
          <ExtLink href={"mailto:" + EMAIL}>{EMAIL}</ExtLink>
          <br />
          My PGP public key is{' '}
          <ExtLink href={PGP.url}>
            {PGP.fingerprint}
          </ExtLink>
        </p>
      </div>
    </>
  )
}

export default Contact
