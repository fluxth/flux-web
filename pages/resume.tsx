import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import ExtLink from '../components/ExtLink'

import { trackEvent } from '../lib/ga'

import config from '../_data/config.json'

import styles from '../styles/Resume.module.scss'

import StarIcon from '../assets/images/star_filled.gif'

type Resume = {
  name: string
  url: string
  updated?: string
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
    trackEvent({ action: 'resume_view', params: item })
  }

  const starSize = 25;
  const star = <Image src={StarIcon} unoptimized={true} width={starSize} height={starSize} />

  return (
    <>
      <Head>
        <title>Resume - flux.ci</title>
      </Head>
      <div className="text-center">
        <h2>View Resume</h2>
        <b>Select your flavor:</b>
        <p className="my-2">
          {items.map((item, k) => (
            <button
              className={styles.button}
              key={item.url}
              autoFocus={k === 0}
              disabled={state.selectedItem === item}
              onClick={() => buttonClick(item)}
            >
              {item.name}
            </button>
          ))}
        </p>
        {state.selectedItem && state.selectedItem.updated ? (
          <p className={styles.updatedText + " text-muted mt-0"}>
            <b>Last Updated</b>: {state.selectedItem.updated}
          </p>
        ) : null}
        <div className="row">
          {state.selectedItem ? (
            <div className={styles.preview + " col-12 col-sm-11 col-md-10"}>
              <iframe src={state.selectedItem.url + '#view=fitH'} />
              <div className={styles.download}>
                {star}
                <ExtLink
                  href={state.selectedItem.url}
                  className="mx-2"
                  onClick={() => trackEvent({
                    action: 'resume_download',
                    params: state.selectedItem ? state.selectedItem : null
                  })}
                >
                  Download PDF
                </ExtLink>
                {star}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Resume
