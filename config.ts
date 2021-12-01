import GlobeImage from './assets/images/globe.gif'
import InfoImage from './assets/images/info.png'
import PhoneBookImage from './assets/images/phone_book.gif'
import FolderFontsImage from './assets/images/folder_fonts.png'
import FileQuestionImage from './assets/images/file_question.png'

import type { MenuItem } from './components/NavMenu'

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
