import React from 'react'
import styled from 'styled-components'

const bg = ({ section }) => {
  switch (section) {
    case 1:
      return 'linear-gradient(to right, #0f0c29, #302b63, #24243e);'

    case 2:
      return 'red;'

    default:
      return '#eee;'
  }
}

const PanelWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  flex-shrink: 0;
  color: #fff;
  background: ${bg};
  background-size: cover;
  background-position: 50%;
`

const Panel = ({ children, section, ...props }) =>
  <PanelWrapper section={section} {...props}>
    {children}
  </PanelWrapper>


// Panel.PropTypes = {
//   children: PropTypes.node.isRequired,
// }

// Panel.defaulProps = {
// }

export { Panel }
