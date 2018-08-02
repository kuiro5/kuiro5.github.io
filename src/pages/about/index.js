import React from 'react'
import ExternalLink from '../../components/ExternalLink'
import InternalLink from '../../components/InternalLink'
import moment from 'moment'

const About = () => {
  //const yearsSinceMoved = moment().diff('06-07-2014', 'years', true)

  return (
    <div>
      <h1>My Story</h1>
      <p>
        Originally from Pittsburgh, PA, I've spent the last 4.5 years living in
        San Francisco. I'm a product and design-driven engineer who is
        passionate about creating human-centered software.
      </p>
      <p>
        I strive for a{' '}
        <InternalLink to="/code-analytics">T-shaped skill set</InternalLink> and
        enjoy chasing complex problems across the stack. Picking the right tool
        for the job is a personal principle, but some of my favorites are
        Javascript, React, Ruby, and Go.
      </p>
      <p>
        I hold a degree in Computer Engineering from Penn State University. I
        value continuous learning, and I pragmatically pick up the latest
        languages and frameworks.
      </p>
      <p>
        My experience ranges from small startups to Fortune 500 companies.
        Currently, I'm working at Marketo by way of the{' '}
        <ExternalLink
          href="https://www.marketo.com/newsroom/press-releases/2017-04-20-Marketo-Acquires-Sales-Engagement-Platform-ToutApp/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          ToutApp acquisition
        </ExternalLink>{' '}
        working on productivity software for sales teams.
      </p>
      <p>
        Outside of code, I enjoy cycling, traveling, and{' '}
        <ExternalLink
          href="https://www.goodreads.com/review/list/21617276?shelf=favorites"
          target="_blank"
          rel="noreferrer"
        >
          reading
        </ExternalLink>. Some of my other interests include cognitive science,
        meditation, and urbanism.
      </p>
      <p>
        I'm deeply passionate about tech and startups, and I'd love to chat.
        Feel free to reach out:
      </p>
      <p>
        <ExternalLink
          style={{ display: 'block' }}
          href="http://www.twitter.com/kuiro5"
          target="_blank"
          rel="noreferrer"
        >
          @kuiro5
        </ExternalLink>
        <ExternalLink
          style={{ display: 'block' }}
          href="mailto:joshkuiros@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          joshkuiros@gmail.com
        </ExternalLink>
      </p>
    </div>
  )
}

export default About
