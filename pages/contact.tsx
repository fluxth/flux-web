import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SendEmailImage from '../assets/images/sendemail.gif'

import { EMAIL, PGP } from '../config'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Info - flux.ci</title>
      </Head>
      <div className="text-center">
        <h2>Contact Info</h2>
        <a target="_blank" rel="noreferrer" href={"mailto:" + EMAIL}>
          <Image src={SendEmailImage} alt="Send Email" unoptimized={true} />
        </a>
        <p>
          Contact me via E-mail:{' '}
          <a target="_blank" rel="noreferrer" href={"mailto:" + EMAIL}>{EMAIL}</a>
          <br />
          My PGP public key is{' '}
          <a target="_blank" rel="noreferrer" href={PGP.url}>
            {PGP.fingerprint}
          </a>
        </p>
      </div>
    </>
  )
}

export default Contact