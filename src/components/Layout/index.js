import React from 'react'
import InternalLink from '../InternalLink'
import { rhythm } from '../../utils/typography'
import 'prismjs/themes/prism.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          👋 Hi, I'm Josh
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <InternalLink
            style={{
              textDecoration: 'none',
            }}
            to={'/'}
          >
            Josh Kuiros
          </InternalLink>
        </h3>
      )
    }
    return (
      <div
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
