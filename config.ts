import GlobeImage from './assets/images/globe.gif'
import InfoImage from './assets/images/info.png'
import PhoneBookImage from './assets/images/phone_book.gif'
import FolderFontsImage from './assets/images/folder_fonts.png'
import FileQuestionImage from './assets/images/file_question.png'

import type { MenuItem } from './components/NavMenu'

export const EMAIL: string = 'thitat@flux.ci'
export const PGP = {
  fingerprint: '0x2A1409A6',
  url: 'https://raw.githubusercontent.com/fluxth/fluxth/master/pgp/fluxth.pgp.asc'
}
export const REPO = {
  url: 'https://github.com/fluxth/fluxth.github.io'
}

export const NAVMENU_ITEMS: MenuItem[] = [
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

export const HOME_LINKS = [
  {
    name: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/fluxth/'
  },
  {
    name: 'GitHub Profile',
    url: 'https://github.com/fluxth'
  },
  {
    name: 'PGP Public Key',
    url: PGP.url 
  },
]
export const HOME_SERVICES = [
  {
    name: 'fluxsearch',
    url: 'https://search.flux.ci'
  },
  {
    name: 'vouchergen',
    url: '/vouchergen'
  }
]
