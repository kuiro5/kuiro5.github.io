import React from 'react'
import bowser from 'bowser/bundled'

const SafeImage = props => {
  const shouldGlitch = () => {
    if (typeof window === `undefined`) {
      return false
    } else {
      const browser = bowser.getParser(window.navigator.userAgent)
      return !browser.satisfies({
        macos: {
          safari: '>0',
        },
        mobile: {
          safari: '>0',
        },
      })
    }
  }

  //if (shouldGlitch()) {
  //const ReactGlitch = require('react-glitch').default

  //return <ReactGlitch {...props} />
  //}

  return <img {...props} />
}

export default SafeImage
