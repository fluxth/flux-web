import GlobeImage from './assets/images/globe.gif'
import InfoImage from './assets/images/info.png'
import PhoneBookImage from './assets/images/phone_book.gif'
import FolderFontsImage from './assets/images/folder_fonts.png'
import FileQuestionImage from './assets/images/file_question.png'

import type { MenuItem } from './components/NavMenu'

type Config = {
  email: string
  pgp: { fingerprint: string, url: string }
  repo: { url: string }
  navmenu_items: MenuItem[]
  quick_links: { name: string, href: string }[]
}

const config: Config = {
  email: 'thitat@flux.ci',
  pgp: {
    fingerprint: '0x2A1409A6',
    url: 'https://raw.githubusercontent.com/fluxth/fluxth/master/pgp/fluxth.pgp.asc'
  },
  repo: {
    url: 'https://github.com/fluxth/fluxth.github.io'
  },
  navmenu_items: [
    {
      name: 'Home Page',
      image: GlobeImage,
      url: '/',
    },
    {
      name: 'Blog',
      image: FolderFontsImage,
      url: '/blog',
    },
    {
      name: 'Portfolio',
      image: PhoneBookImage,
      url: '/portfolio',
    },
    {
      name: 'Resume',
      image: FileQuestionImage,
      url: '/resume',
    },
    {
      name: 'Contact Info',
      image: InfoImage,
      url: '/contact',
    },
  ]
  ,
  quick_links: [
    {
      name: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/fluxth/'
    },
    {
      name: 'GitHub Profile',
      href: 'https://github.com/fluxth'
    },
    {
      name: 'PGP Public Key',
      href: 'https://raw.githubusercontent.com/fluxth/fluxth/master/pgp/fluxth.pgp.asc'
    },
  ]
}

export default config
