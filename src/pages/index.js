import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <h2>Words</h2>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <h2>Code</h2>
        <ul>
          <li>
            <a
              href="https://www1.toutapp.com/university/campaigns-2-0/"
              target="blank"
              rel="noopener"
            >
              ToutApp Campaigns
            </a>: digitized playbooks for sales teams
          </li>
          <li>
            <a
              href="https://www1.toutapp.com/blog/introducing-a-completely-new-templates-experience/"
              target="blank"
              rel="noopener"
            >
              ToutApp Templates
            </a>: email communication templates everywhere you work
          </li>
          <li>
            <a href="https://www.ciscospark.com/" target="blank" rel="noopener">
              Cisco Spark
            </a>: enterprise messaging platform
          </li>
          <li>
            <a href="http://tools.buildsci.us/" target="blank" rel="noopener">
              EEBHub
            </a>: open source tool to simulate build energy simulation
          </li>
        </ul>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
