import styled from 'styled-components'
import ReactGlitch from 'react-glitch'
import { rhythm } from '../../utils/typography'

const GlitchPic = styled(ReactGlitch)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1)};
  width: ${rhythm(4)};
  height: ${rhythm(4)};
  border-radius: 50%;
`

export default GlitchPic
