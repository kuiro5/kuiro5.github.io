import React from 'react'
import mePicImgSrc from '../../images/me.jpg'
import BioPic from '../BioPic'
import InternalLink from '../../components/InternalLink'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <BioPic src={mePicImgSrc} alt={`Josh Kuiros`} />
        <p>
          I'm a full stack engineer living and working in San Francisco. I enjoy
          building things using React, Ruby, and Go. When I'm not coding, you
          can find me cycling around the Bay Area.{' '}
          {/*<InternalLink to={'/about'}>Read more →</InternalLink>*/}
        </p>
      </div>
    )
  }
}

export default Bio
