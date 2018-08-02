import React, { Component } from 'react'
import ExternalLink from '../ExternalLink'

class Code extends Component {
  constructor() {
    super()
    this.codes = [
      {
        href: 'https://www1.toutapp.com/university/campaigns-2-0/',
        title: 'ToutApp Campaigns',
        description: 'digitized playbooks for sales teams',
      },
      {
        href:
          'https://www1.toutapp.com/blog/introducing-a-completely-new-templates-experience/',
        title: 'ToutApp Templates',
        description: 'email communication templates everywhere you work',
      },
      {
        href: '/review-please',
        title: 'Review Please',
        description: 'slack bot for github pull requests',
      },
      {
        href: 'https://www.ciscospark.com/',
        title: 'Cisco Spark',
        description: 'enterprise messaging platform',
      },
      {
        href: 'http://tools.buildsci.us/',
        title: 'EEBHub',
        description: 'open source tool to simulate build energy',
      },
    ]

    this.getCodes = this.getCodes.bind(this)
  }

  render() {
    const codes = this.getCodes()

    return (
      <div>
        <h2>Code</h2>
        {codes}
      </div>
    )
  }

  getCodes() {
    return (
      <ul>
        {this.codes.map(({ href, title, description }) => (
          <li key={title}>
            <ExternalLink href={href} target="blank" rel="noopener">
              {title}
            </ExternalLink>: {description}
          </li>
        ))}
      </ul>
    )
  }
}

export default Code
