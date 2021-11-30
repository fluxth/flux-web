import Image from 'next/image'
import Link from 'next/link'

import GlobeImage from '../assets/images/globe.gif'
import InfoImage from '../assets/images/info.png'
import PhoneBookImage from '../assets/images/phone_book.gif'
import FolderFontsImage from '../assets/images/folder_fonts.png'
import FileQuestionImage from '../assets/images/file_question.png'

import styles from '../styles/NavMenu.module.scss'

type MenuItem = {
  name: string
  image?: StaticImageData,
  url?: string,
}

const MENU_ITEMS: MenuItem[] = [
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

const NavMenu = () => (
  <div className={styles.navMenu}>
    {MENU_ITEMS.map(i => (
      <div className={styles.navMenuItem}>
        {i.image ? (
          <div className={styles.navMenuItemImage}>
            <Image src={i.image} alt={i.name} height={32} width={32} />
          </div>
        ) : null}
        <b>
          {i.url ? (
            <Link href={i.url}>{i.name}</Link>
          ) : (
            <a href="#" onClick={(e) => e.preventDefault()}>{i.name}</a>
          )}
        </b>
      </div>
    ))}
  </div>
)

export default NavMenu
