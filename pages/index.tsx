import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import PGPDialog, { type PGPData } from '../components/PGPDialog'
import ExtLink from '../components/ExtLink'
import { escapeHtml } from '../lib/utils'

import { REPO } from '../config'
import config from '../_data/config.json'

import styles from '../styles/Home.module.scss'

import WelcomeImage from '../assets/images/welcome.gif'
import GuestBookImage from '../assets/images/pleasesignguestbook.gif'
import ChickenImage from '../assets/images/chicken-ani.gif'

type LinkItem = {
  name: string
  url: string
}

type BadgeItem = {
  src: string
  alt?: string
  url?: string
  title?: string
}

type Props = {
  links: {
    general: LinkItem[]
    services: LinkItem[]
  }
  badges: (string | BadgeItem)[]
  pgp: PGPData
}

export const getStaticProps: GetStaticProps = async () => {
  const pgpFetch = await fetch(config.pgp.url)
  if (!pgpFetch.ok) throw 'PGP Fetch Failed'

  const pgpContent = escapeHtml(await pgpFetch.text())

  return {
    props: {
      links: config.homepage.links,
      badges: config.homepage.badges,
      pgp: { ...config.pgp, content: pgpContent }
    }
  }
}

const Home: NextPage<Props> = ({ links, badges, pgp }) => {
  return (
    <>
      <Head>
        <title>Home - flux.ci</title>
      </Head>
      <Image src={WelcomeImage} unoptimized={true} />
      <p>
        <Link href="/">flux.ci</Link> is a personal website owned by{' '}
        <b>Thitat Auareesuksakul</b>, a software engineer and audio enthusiast.
      </p>
      <p>
        This nostalgic <b>Web 2.0</b> experience, despite its looks, is powered by the
        futuristic <ExtLink href="https://nextjs.org/"><i>NextJS</i></ExtLink> framework.
        <br />
        <u>Fun Fact:</u> The navigation table above isn&apos;t a table, but flexbox divs!
        Use <ExtLink href="https://getfirebug.com">Firebug</ExtLink> to see them in action!
      </p>
      <p>
        This site is 100% open-source and available
        at <ExtLink href={REPO.url}>this GitHub repo</ExtLink>.
      </p>
      <div className="row">
        <div className="col-12 col-sm-6">
          <b>Cool Links</b>
          <ul className="mt-0">
            {links.general.map(i => (
              <li key={i.url}><ExtLink href={i.url}>{i.name}</ExtLink></li>
            ))}
            <li>
              <PGPDialog pgp={pgp}>
                <a href="#pgp" onClick={(e) => e.preventDefault()}>
                  View PGP Public Key
                </a>
              </PGPDialog>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-6">
          <b>Services</b>
          <ul className="mt-0">
            {links.services.map(i => (
              <li key={i.url}><ExtLink href={i.url}>{i.name}</ExtLink></li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.badges + " mt-4"}>
        {badges.map(item => {
          const prefix = '/images/badges/'
          if (typeof item === 'string')
            return <img src={prefix + item} alt="Badge" key={item} />

          const image = (
            <img
              src={prefix + item.src}
              title={item.title}
              alt={item.alt ? item.alt : "Badge"}
              key={item.src}
            />
          )

          return !item.url ? image : (
            <ExtLink href={item.url}>{image}</ExtLink>
          )
        })}
      </p>
      <p className="text-center">
        <Image src={ChickenImage} alt="Chicken (tm)" unoptimized={true} />
        <br />
        <Link href="/guestbook">
          <a>
            <Image src={GuestBookImage} alt="Sign the Guestbook!" unoptimized={true} />
          </a>
        </Link>
      </p>
    </>
  )
}

export default Home
