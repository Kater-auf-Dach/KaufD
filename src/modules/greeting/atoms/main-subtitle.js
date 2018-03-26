import styled from 'styled-components'

import { Heading } from '../../../ui'
import { font, color } from '../../../ui/theme'

const MainSubtitle = Heading.extend`
  font-size: 3rem;
  font-family: ${font};
  color: ${color.text};
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
`
export { MainSubtitle }
