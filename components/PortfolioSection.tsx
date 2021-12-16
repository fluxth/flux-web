import { ReactElement } from 'react'

import styles from '../styles/Portfolio.module.scss'

type Props = {
  name: string
  id: string
  children?: ReactElement | ReactElement[]
  icon?: ReactElement
}

const PortfolioSection = (props: Props) => (
  <section className={styles.section} id={props.id}>
    <h2>
      <span className="me-3">{props.name}</span>
      {props.icon}
    </h2>
    {props.children}
    <p className="text-end">
      [
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          window.scroll(window.screenX, 0)
          console.log(window.screenX)
        }}>
        Back to top
      </a>
      ]
    </p>
  </section>
)

export default PortfolioSection
