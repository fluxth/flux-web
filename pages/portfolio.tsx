import type { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import ExtLink from '../components/ExtLink'
import PortfolioSection from '../components/PortfolioSection'

import portfolio_data from '../_data/portfolio.json'

import styles from '../styles/Portfolio.module.scss'

import VHSImage from '../assets/images/vhs.gif'
import ComputerImage from '../assets/images/computer.gif'
import SmileyImage from '../assets/images/smiley.gif'

type CodingProject = {
  title: string
  repo_url: string
  app_url?: string
  technologies: string[]
  descriptions: string[]
}

type MediaProject = {
  title: string
  subtitle: string
  roles: string[]
  action?: {
    name: string
    url: string | string[]
  }
}

type Props = {
  portfolio: {
    updated: string
    github_url: string
    coding: CodingProject[]
    media: MediaProject[]
    random: any
  }
}

type State = {
  modernFonts: boolean
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      portfolio: portfolio_data,
    },
  }
}

const Portfolio: NextPage<Props> = ({ portfolio }) => {
  const [state, setState] = useState<State>({
    modernFonts: false,
  })

  return (
    <>
      <Head>
        <title>Portfolio - flux.ci</title>
      </Head>

      <div className={state.modernFonts ? 'modern' : undefined}>
        <div className={styles.header}>
          <h1>Portfolio</h1>
          <div>
            <button onClick={() => setState({ modernFonts: !state.modernFonts })}>
              Switch to {state.modernFonts ? 'vintage' : 'modern'} fonts
            </button>
          </div>
        </div>

        <p className="mt-0">
          Jump to: <a href="#coding">coding projects</a>
          {' / '}
          <a href="#media">media projects</a>
          {portfolio.random.length > 0 ? (
            <>
              {' / '}
              <a href="#random">random hobby projects</a>
            </>
          ) : null}
        </p>

        <PortfolioSection
          name="Coding"
          id="coding"
          icon={<Image src={ComputerImage} width={25} height={20} unoptimized={true} />}>
          <>
            {portfolio.coding.map((project, i) => (
              <div className={styles.codeProject} key={i}>
                <div className={styles.heading}>
                  <b>{project.title}</b>
                  <span className="mx-2">~</span>
                  <i className="me-2">{project.technologies.join(', ')}</i>[
                  <ExtLink href={project.repo_url}>repository</ExtLink>]
                  {project.app_url ? (
                    <>
                      {' '}
                      [<ExtLink href={project.app_url}>app</ExtLink>]
                    </>
                  ) : null}
                </div>
                {project.descriptions && project.descriptions.length ? (
                  <div className={styles.descriptions + ' text-secondary'}>
                    <ul>
                      {project.descriptions.map((desc) => (
                        <li key={desc}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
            <p>
              <i>
                More projects avaliable at my{' '}
                <ExtLink href={portfolio.github_url}>GitHub profile</ExtLink>!
              </i>
            </p>
          </>
        </PortfolioSection>

        <PortfolioSection
          name="Media"
          id="media"
          icon={<Image src={VHSImage} width={30} height={20} unoptimized={true} />}>
          <div className="row">
            {portfolio.media.map((project, i) => (
              <div className={styles.mediaProject + ' col-12 col-sm-6'} key={i}>
                <div className={styles.heading}>
                  <b>{project.title}</b>
                  <i className="text-secondary">{project.subtitle}</i>
                </div>
                <div>
                  {project.roles.join(', ')}
                  {project.action ? (
                    <span className="float-end">
                      {typeof project.action.url === 'string' ? (
                        <>
                          [<ExtLink href={project.action.url}>{project.action.name}</ExtLink>]
                        </>
                      ) : (
                        <>
                          [{project.action.name}:{' '}
                          {Array.from(Array(project.action.url.length).keys())
                            .map((i) => (
                              <ExtLink href={project.action?.url[i]} key={i}>
                                {i + 1}
                              </ExtLink>
                            ))
                            .reduce((prev, curr) => (
                              <>{[prev, ', ', curr]}</>
                            ))}
                          ]
                        </>
                      )}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </PortfolioSection>

        {portfolio.random.length > 0 ? (
          <PortfolioSection
            name="Random Stuff"
            id="random"
            icon={
              <Image src={SmileyImage} width={20} height={20} unoptimized={true} />
            }></PortfolioSection>
        ) : null}

        <p className="text-secondary text-center">
          <b>Portfolio Last Updated:</b> {portfolio.updated}
        </p>
      </div>
    </>
  )
}

export default Portfolio
