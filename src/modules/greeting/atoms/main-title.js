import styled from 'styled-components'

import { Heading } from '../../../ui'
import { font, color } from '../../../ui/theme'

const MainTitle = Heading.extend`
  font-size: 5rem;
  font-family: ${font};
  color: ${color.text};
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
`
export { MainTitle }
