import Image from 'next/image'
import Link from 'next/link'

import { trackEvent } from '../lib/ga'

import GlobeImage from '../assets/images/globe.gif'
import InfoImage from '../assets/images/info.png'
import PhoneBookImage from '../assets/images/phone_book.gif'
import FolderFontsImage from '../assets/images/folder_fonts.png'
import FileQuestionImage from '../assets/images/file_question.png'

import styles from '../styles/NavMenu.module.scss'

export type MenuItem = {
  name: string
  image?: StaticImageData | string
  url?: string
  external?: boolean
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
    url: 'https://blog.flux.ci',
    external: true,
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

const menuClick = (item: MenuItem) => {
  trackEvent({
    action: 'navmenu_click',
    params: {
      name: item.name,
    },
  })
}

const renderNavLink = (item: MenuItem) => {
  if (item.url) {
    if (item.external) return <a href={item.url}>{item.name}</a>
    else
      return (
        <Link href={item.url}>
          <a onClick={() => menuClick(item)}>{item.name}</a>
        </Link>
      )
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        menuClick(item)
      }}>
      {item.name}
    </a>
  )
}

const NavMenu = () => (
  <>
    <div>
      <div className={'row ' + styles.navMenu}>
        {NAVMENU_ITEMS.map((i) => (
          <div className={'col-12 col-md-auto ' + styles.navMenuItem} key={i.name + i.url}>
            {i.image ? (
              <div className={styles.navMenuItemImage}>
                <Image src={i.image} alt={i.name} height={32} width={32} unoptimized={true} />
              </div>
            ) : null}
            <b>{renderNavLink(i)}</b>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default NavMenu
