import React from 'react'
import InternalLink from '../components/InternalLink'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import Code from '../components/Code'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import { graphql } from 'gatsby'
import './styles.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const location = this.props.location

    return (
      <Layout location={location}>
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
                <InternalLink to={node.fields.slug}>{title}</InternalLink>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <Code />
      </Layout>
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
