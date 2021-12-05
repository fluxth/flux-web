declare global {
  interface Window {
    gtag: any
  }
}

// TODO: Move this later
export const GA_ID = 'G-0KXE0067PX'

// log the pageview with their URL
export const pageView = (url: string) => {
  window.gtag('config', GA_ID, {
    page_path: url,
  })
}

// log specific events happening.
type Event = {
  action: string
  params?: { [entry: string]: any } | null
}

export const trackEvent = ({ action, params }: Event) => {
  if (window.gtag)
    window.gtag('event', action, params)
}
