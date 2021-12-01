import { Component } from 'react'

type Props = {}

type State = {
  darkThemeEnabled: boolean
}

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

    this.setState({ darkThemeEnabled: bodyClassList.contains('dark-theme') })
  }

  switchTheme(event: any) {
    event.preventDefault()
    const bodyClassList = document.querySelector('body')?.classList
    if (!bodyClassList) return

    if (this.state.darkThemeEnabled) {
      bodyClassList.remove('dark-theme')
      bodyClassList.add('light-theme')
      this.setState({ darkThemeEnabled: false })
    } else {
      bodyClassList.remove('light-theme')
      bodyClassList.add('dark-theme')
      this.setState({ darkThemeEnabled: true })
    }
  }

  render() {
    return (
      <footer className="my-4 text-muted text-center">
        &copy; {new Date().getFullYear()}, Thitat Auareesuksakul.<br />
        Inspired by homepages from early WWW era :)
        <div className="mt-2">
          [<a href="#switch-theme" onClick={this.switchTheme.bind(this)}>
            Switch to { this.state.darkThemeEnabled ? 'Light Mode' : 'the Dark Side' }
          </a>]
        </div>
      </footer>
    )
  }
}


export default Footer
