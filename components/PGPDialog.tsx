import { useState, MouseEvent, ReactElement } from 'react'

import Dialog from './Dialog'
import ExtLink from './ExtLink'

import { trackEvent } from '../lib/ga'

export type PGPData = {
  url: string
  fingerprint: string
  content: string
}

type Props = {
  pgp: PGPData
  children: ReactElement
}

type State = {
  shown: boolean
}

const PGPDialog = ({ pgp, children }: Props) => {
  const [state, setState] = useState<State>({
    shown: false,
  })

  const pgpClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    setState({ shown: true })
    trackEvent({ action: 'pgp_click' })
  }

  return (
    <>
      <div onClick={pgpClick} style={{ display: 'inline-block' }}>
        {children}
      </div>
      <Dialog
        title="PGP Information"
        shown={state.shown}
        titleBarControls={
          <button aria-label="Close" onClick={() => setState({ shown: false })}></button>
        }
      >
        <p>PGP Public Key &lt;{pgp.fingerprint}&gt;</p>
        <pre>{pgp.content}</pre>
        <section className="field-row justify-content-end mt-3">
          <ExtLink href={pgp.url} onClick={() => trackEvent({ action: 'pgp_download_click' })}>
            <button autoFocus={true}>Download</button>
          </ExtLink>
          <button onClick={() => setState({ shown: false })}>Close</button>
        </section>
      </Dialog>
    </>
  )
}

export default PGPDialog
