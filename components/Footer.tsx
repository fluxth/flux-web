import { Component, MouseEvent } from 'react'
import Image from 'next/legacy/image'

import { trackEvent } from '../lib/ga'
import styles from '../styles/Footer.module.scss'

import DarkSideImage from '../assets/images/darkside.gif'

type Props = {}

type State = {
  darkThemeEnabled: boolean
}

const DARK_THEME_KEY = 'fluxci_JoinedTheDarkSide'

class Footer extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    // Yes, this is a really hacky way to do this but I do not want to bring
    // in Redux or similar just yet...
    this.state = { darkThemeEnabled: false }
  }

  componentDidMount() {
    const bodyDarkTheme = document.body.classList.contains('dark-theme')
    const savedDarkTheme = window.localStorage.getItem(DARK_THEME_KEY)
    if (savedDarkTheme !== null) {
      // Has saved preference in localStorage
      const savedDarkThemeValue = savedDarkTheme === 'true'
      if (bodyDarkTheme !== savedDarkThemeValue) this.setDarkTheme(savedDarkThemeValue, false)
    } else {
      // Use CSS dark mode value
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
          this.setDarkTheme(true, false)
      }
    }
  }

  setDarkTheme(enabled: boolean, track?: boolean) {
    const bodyClassList = document.body.classList

    // Clear themes
    bodyClassList.remove('light-theme')
    bodyClassList.remove('dark-theme')

    if (enabled) {
      bodyClassList.add('dark-theme')
      this.setState({ darkThemeEnabled: true })
      window.localStorage.setItem(DARK_THEME_KEY, 'true')
      if (track) trackEvent({ action: 'theme_change', params: { themeName: 'dark' } })
    } else {
      bodyClassList.add('light-theme')
      this.setState({ darkThemeEnabled: false })
      window.localStorage.setItem(DARK_THEME_KEY, 'false')
      if (track) trackEvent({ action: 'theme_change', params: { themeName: 'light' } })
    }
  }

  switchTheme(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    this.setDarkTheme(!this.state.darkThemeEnabled, true)
  }

  render() {
    return (
      <footer className={styles.footer + ' my-4 text-muted text-center'}>
        &copy; {new Date().getFullYear()}, Thitat Auareesuksakul.
        <br />
        Inspired by homepages from early WWW era :)
        <div className={styles.darkSideToggle + ' mt-2'}>
          [
          <a
            href="#switch-theme"
            data-switch-to={this.state.darkThemeEnabled ? 'light-theme' : 'dark-theme'}
            onClick={this.switchTheme.bind(this)}
          >
            Switch to {this.state.darkThemeEnabled ? 'Light Mode' : 'the Dark Side'}
          </a>
          ]
          <div className={styles.darkSidePopover}>
            <Image src={DarkSideImage} alt="" unoptimized={true} />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
