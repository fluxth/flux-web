import Image from 'next/image'
import Link from 'next/link'
import config from '../config'

import styles from '../styles/NavMenu.module.scss'

export type MenuItem = {
  name: string
  image?: StaticImageData | string,
  url?: string,
}

const NavMenu = () => (
  <>
    <div>
      <div className={"row " + styles.navMenu}>
        {config.navmenu_items.map(i => (
          <div className={"col-12 col-md-auto " + styles.navMenuItem} key={i.name + i.url}>
            {i.image ? (
              <div className={styles.navMenuItemImage}>
                <Image src={i.image} alt={i.name} height={32} width={32} unoptimized={true} />
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
    </div>
  </>
)

export default NavMenu
