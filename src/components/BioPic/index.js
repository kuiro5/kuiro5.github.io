import React, { Component } from 'react'
import GlitchPic from './GlitchPic'
import imgSrc from '../../images/me.jpg'

class BioPic extends Component {
  constructor() {
    super()
    this.state = { isGlitching: window.location.pathname === '/' }
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
      <GlitchPic
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
