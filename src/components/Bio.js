import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'typeface-vollkorn'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          //marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Josh Kuiros`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: rhythm(1),
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: '50%',
          }}
        />
        <p>
          I'm a full stack developer living and working in San Francisco. I
          enjoy building things using React, Ruby, and Go. When I'm not coding,
          you can find me cycling around the Bay Area.
        </p>
      </div>
    )
  }
}

export default Bio
