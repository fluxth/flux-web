import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, MouseEvent } from 'react'

import SendEmailImage from '../assets/images/sendemail.gif'

import ExtLink from '../components/ExtLink'
import Dialog from '../components/Dialog'

import { trackEvent } from '../lib/ga'
import { escapeHtml } from '../lib/utils'

import config from '../_data/config.json'

type Props = {
  email: string
  pgp: {
    fingerprint: string
    url: string
  }
  pgpContent: string
}

type State = {
  pgpDialogShown: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const pgpFetch = await fetch(config.pgp.url)
  if (!pgpFetch.ok) throw 'PGP Fetch Failed'

  const pgpContent = escapeHtml(await pgpFetch.text())

  return {
    props: {
      email: config.email,
      pgp: config.pgp,
      pgpContent
    }
  }
}

const Contact: NextPage<Props> = ({ email, pgp, pgpContent }) => {
  const [state, setState] = useState<State>({
    pgpDialogShown: false
  })

  const pgpClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setState({ pgpDialogShown: true })
    trackEvent({ action: 'pgp_click' })
  }

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
          <a href="#pgp" onClick={pgpClick}>
            {pgp.fingerprint}
          </a>
        </p>
      </div>
      <Dialog
        title="PGP Information"
        shown={state.pgpDialogShown}
        titleBarControls={
          <button aria-label="Close" onClick={() => setState({ pgpDialogShown: false })}></button>
        }
      >
        <p>
          PGP Public Key &lt;{pgp.fingerprint}&gt;
        </p>
        <pre dangerouslySetInnerHTML={{ __html: pgpContent.replaceAll('\n', '<br>') }}></pre>
        <section className="field-row justify-content-end mt-3">
          <ExtLink href={pgp.url} onClick={() => trackEvent({ action: 'pgp_download_click' })}>
            <button autoFocus={true}>Download</button>
          </ExtLink>
          <button onClick={() => setState({ pgpDialogShown: false })}>Close</button>
        </section>
      </Dialog>
    </>
  )
}

export default Contact
