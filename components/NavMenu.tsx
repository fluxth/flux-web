import Image from 'next/image'
import Link from 'next/link'

import { trackEvent } from '../lib/ga'

import { NAVMENU_ITEMS } from '../config'

import styles from '../styles/NavMenu.module.scss'

export type MenuItem = {
  name: string
  image?: StaticImageData | string,
  url?: string,
}

const menuClick = (item: MenuItem) => {
  trackEvent({
    action: 'navmenu-click',
    params: {
      name: item.name
    }
  })
}

const NavMenu = () => (
  <>
    <div>
      <div className={"row " + styles.navMenu}>
        {NAVMENU_ITEMS.map(i => (
          <div className={"col-12 col-md-auto " + styles.navMenuItem} key={i.name + i.url}>
            {i.image ? (
              <div className={styles.navMenuItemImage}>
                <Image src={i.image} alt={i.name} height={32} width={32} unoptimized={true} />
              </div>
            ) : null}
            <b>
              {i.url ? (
                <Link href={i.url}>
                  <a onClick={() => menuClick(i)}>{i.name}</a>
                </Link>
              ) : (
                <a href="#" onClick={(e) => { e.preventDefault(); menuClick(i) }}>{i.name}</a>
              )}
            </b>
          </div>
        ))}
      </div>
    </div>
  </>
)

export default NavMenu
