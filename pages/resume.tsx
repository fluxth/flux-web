import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import ExtLink from '../components/ExtLink'

import styles from '../styles/Resume.module.scss'

type Resume = {
  name: string
  src: string
}

type State = {
  items: Resume[]
  selectedItem?: Resume
}

const RESUMES = [
  {
    name: 'Coding Resume',
    src: '/files/coding_resume.pdf'
  },
  {
    name: 'Media Resume',
    src: '/files/media_resume.pdf'
  }
]

const Resume: NextPage = () => {
  const [state, setState] = useState<State>({
    items: RESUMES
  })

  const buttonClick = (item: Resume) => {
    setState({ ...state, selectedItem: item })
  }

  return (
    <>
      <Head>
        <title>Resume - flux.ci</title>
      </Head>
      <div className="text-center">
        <h2>View Resume</h2>
        <b>Select your flavor:</b>
        <p className="mt-2">
          {state.items.map(item => (
            <button
              className={styles.button}
              key={item.src}
              disabled={state.selectedItem === item}
              onClick={() => buttonClick(item)}
            >
              {item.name}
            </button>
          ))}
        </p>
        {state.selectedItem ? (
          <div className={styles.preview}>
            <iframe src={state.selectedItem.src} />
            [<ExtLink href={state.selectedItem.src}>Download PDF</ExtLink>]
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Resume
