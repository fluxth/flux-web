import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import config from '../config'

import styles from '../styles/Home.module.scss'

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
        futuristic <a target="_blank" rel="noreferrer" href="https://nextjs.org/"><i>NextJS</i></a> framework.
        <br />
        <u>Fun Fact:</u> The navigation table above isn&apos;t a table, but flexbox divs!
        Use <a target="_blank" rel="noreferrer" href="https://getfirebug.com">Firebug</a> to see them in action!
      </p>
      <p>
        This site is 100% open-source and available
        at <a target="_blank" rel="noreferrer" href={config.repo.url}>this GitHub repo</a>.
      </p>
      <div className="row">
        <div className="col-12 col-sm-6">
          <p>
            <b>Cool Links</b>
            <ul className="mt-0">
              {config.quick_links.map(i => (
                <li key={i.href}><a target="_blank" rel="noreferrer" href={i.href}>{i.name}</a></li>
              ))}
            </ul>
          </p>
        </div>
        <div className="col-12 col-sm-6">
          <p>
            <b>Services</b>
            <ul className="mt-0">
              <li><a target="_blank" rel="noreferrer" href="https://search.flux.ci">fluxsearch</a></li>
              <li><a target="_blank" rel="noreferrer" href="/vouchergen">vouchergen</a></li>
            </ul>
          </p>
        </div>
      </div>
      <p className={styles.badges + " mt-4"}>
        {BADGES.map(n => <img src={'/images/badges/' + n} alt="Badge" key={n} />)}
      </p>
    </>
  )
}

export default Home
