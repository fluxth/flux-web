import NavMenu from './NavMenu'

import styles from '../styles/Header.module.scss'

type Props = {
  title: string
}

const Header = ({ title }: Props) => (
  <div className={styles.header}>
    <div className={styles.headerTitle}>
      <h1>{title}</h1>
    </div>
    <NavMenu />
    <hr />
    <noscript>
      <p className="text-red text-center">
        <b>Important Message:</b> This site requires JavaScript to function!
      </p>
    </noscript>
  </div>
)

export default Header
