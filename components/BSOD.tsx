import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import styles from '../styles/BSOD.module.scss'

type Props = {
  url?: string
  children: string
}

const keyDown = () => {}

const BSOD = ({ url, children }: Props) => {
  const router = useRouter()
  const bsodRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bsodRef.current?.focus()
  }, [])

  return (
    <div className={styles.bsod} tabIndex={1} ref={bsodRef} onKeyDown={() => router.push('/')}>
      <div className={styles.inner}>
        <p className={styles.heading}>flux.ci</p>
        <div className={styles.content}>
          <p>
            A fatal exception {children} has occured at {url ? url : '0069:BABE0420'}. The current
            webpage will be terminated.
          </p>
          <ul>
            <li>
              Press any key or <Link href="/">click here</Link> to go to the homepage.
            </li>
            <li>Press Back to return to previous page.</li>
            <li>
              Press F5 to refresh this webpage. However, you are likely to encounter this error
              again.
            </li>
          </ul>
        </div>
        <p className="mt-4">
          Press any key to continue <span className={styles.blink}>_</span>
        </p>
      </div>
    </div>
  )
}

export default BSOD
