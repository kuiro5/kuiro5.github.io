import React, { Component } from 'react'
import imgSrc from '../../images/me.jpg'
import SafeImage from './SafeImage'
import { rhythm } from '../../utils/typography'

class BioPic extends Component {
  constructor() {
    super()

    let isGlitching = false
    if (typeof window !== `undefined`) {
      isGlitching = window.location.pathname === '/'
    }
    this.state = { isGlitching }
    this.GLITCH_DURATION = 4000

    this.toggleGlitch = this.toggleGlitch.bind(this)
  }

  componentDidMount() {
    const { isGlitching } = this.state

    if (isGlitching) {
      setTimeout(() => {
        this.setState({ isGlitching: false })
      }, this.GLITCH_DURATION)
    }
  }

  toggleGlitch() {
    const { isGlitching } = this.state
    this.setState({ isGlitching: !isGlitching })
  }

  render() {
    const { isGlitching } = this.state

    return (
      <SafeImage
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: rhythm(1),
          width: rhythm(4),
          height: rhythm(4),
          borderRadius: '50%',
        }}
        onMouseOver={this.toggleGlitch}
        onMouseOut={this.toggleGlitch}
        src={imgSrc}
        glitching={isGlitching}
        glitchOptions={{
          seed: [0, 60],
          quality: 99,
          amount: 0,
          iterations: [1, 5, 10, 20],
        }}
        speed={[50, 500, 500]}
      />
    )
  }
}

export default BioPic
