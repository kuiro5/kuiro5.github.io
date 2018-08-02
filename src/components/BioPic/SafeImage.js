import React from 'react'

const SafeImage = props => {
  if (typeof window !== `undefined`) {
    const ReactGlitch = require('react-glitch').default

    return <ReactGlitch {...props} />
  }

  return <img {...props} />
}

export default SafeImage
