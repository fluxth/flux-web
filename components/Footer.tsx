import { Component } from 'react'

import { trackEvent } from '../lib/ga'

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
    const bodyClassList = document.querySelector('body')?.classList
    if (!bodyClassList) {
      this.setState({ darkThemeEnabled: false })
      return
    }

    const bodyDarkTheme = bodyClassList.contains('dark-theme')

    const savedDarkTheme = window.localStorage.getItem(DARK_THEME_KEY) === 'true'
    if (bodyDarkTheme !== savedDarkTheme) {
      this.setDarkTheme(savedDarkTheme, false)
    }
  }

  setDarkTheme(enabled: boolean, track?: boolean) {
    const bodyClassList = document.querySelector('body')?.classList
    if (!bodyClassList) return

    // Clear themes
    bodyClassList.remove('light-theme')
    bodyClassList.remove('dark-theme')

    if (enabled) {
      bodyClassList.add('dark-theme')
      this.setState({ darkThemeEnabled: true })
      window.localStorage.setItem(DARK_THEME_KEY, 'true')
      if (track)
        trackEvent({ action: 'theme-change', params: { themeName: 'dark' } })
    } else {
      bodyClassList.add('light-theme')
      this.setState({ darkThemeEnabled: false })
      window.localStorage.setItem(DARK_THEME_KEY, 'false')
      if (track)
        trackEvent({ action: 'theme-change', params: { themeName: 'light' } })
    }
  }

  switchTheme(event: any) {
    event.preventDefault()
    this.setDarkTheme(!this.state.darkThemeEnabled, true)
  }

  render() {
    return (
      <footer className="my-4 text-muted text-center">
        &copy; {new Date().getFullYear()}, Thitat Auareesuksakul.<br />
        Inspired by homepages from early WWW era :)
        <div className="mt-2">
          [<a href="#switch-theme" onClick={this.switchTheme.bind(this)}>
            Switch to {this.state.darkThemeEnabled ? 'Light Mode' : 'the Dark Side'}
          </a>]
        </div>
      </footer>
    )
  }
}


export default Footer
