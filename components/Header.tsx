import NavMenu from "./NavMenu"

import styles from '../styles/Header.module.scss'

const Header = () => (
  <div className={styles.header}>
    <h1 className="text-center">&gt; flux.ci &lt;</h1>
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
