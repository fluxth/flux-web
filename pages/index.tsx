import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import ExtLink from '../components/ExtLink'

import { REPO, HOME_LINKS, HOME_SERVICES } from '../config'

import styles from '../styles/Home.module.scss'

import GuestBookImage from '../assets/images/pleasesignguestbook.gif'
import ChickenImage from '../assets/images/chicken-ani.gif'

const BADGES = [
  'noteoth2.gif',
  'now20_button.gif',
  'apple.gif',
  '800x600a.gif',
  'captain-hawkes.neocities.org.gif',
  'chill_pill.gif',
  'ka88x31.gif',
  'any88x31.gif',
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - flux.ci</title>
      </Head>
      <h2 className="mb-0">Welcome!</h2>
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
          <p>
            <b>Cool Links</b>
            <ul className="mt-0">
              {HOME_LINKS.map(i => (
                <li key={i.url}><ExtLink href={i.url}>{i.name}</ExtLink></li>
              ))}
            </ul>
          </p>
        </div>
        <div className="col-12 col-sm-6">
          <p>
            <b>Services</b>
            <ul className="mt-0">
              {HOME_SERVICES.map(i => (
                <li key={i.url}><ExtLink href={i.url}>{i.name}</ExtLink></li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <p className={styles.badges + " mt-4"}>
        {BADGES.map(n => <img src={'/images/badges/' + n} alt="Badge" key={n} />)}
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
