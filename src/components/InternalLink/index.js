import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InternalLink = styled(Link)`
  color: black;
  font-weight: normal;

  &:hover {
    color: blue;
  }
`

export default InternalLink
