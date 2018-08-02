import React from 'react'
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

const InternalLink = styled(GatsbyLink)`
  color: black;
  font-weight: normal;

  &:hover {
    color: blue;
  }
`

export default InternalLink
