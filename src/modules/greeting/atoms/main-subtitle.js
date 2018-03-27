import { Heading } from '../../../ui'
import { color } from '../../../ui/theme'

const MainSubtitle = Heading.extend`
  font-size: 3rem;
  color: ${color.text};
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
`
export { MainSubtitle }
