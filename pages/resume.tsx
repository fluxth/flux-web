import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import ExtLink from '../components/ExtLink'

import config from '../_data/config.json'

import styles from '../styles/Resume.module.scss'

type Resume = {
  name: string
  url: string
}

type Props = {
  items: Resume[]
}

type State = {
  selectedItem?: Resume
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      items: config.resume.items
    }
  }
}

const Resume: NextPage<Props> = ({ items }) => {
  const [state, setState] = useState<State>({})

  const buttonClick = (item: Resume) => {
    setState({ selectedItem: item })
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
          {items.map(item => (
            <button
              className={styles.button}
              key={item.url}
              disabled={state.selectedItem === item}
              onClick={() => buttonClick(item)}
            >
              {item.name}
            </button>
          ))}
        </p>
        {state.selectedItem ? (
          <div className={styles.preview}>
            <iframe src={state.selectedItem.url} />
            [<ExtLink href={state.selectedItem.url}>Download PDF</ExtLink>]
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Resume
