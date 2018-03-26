import React from 'react'
import styled from 'styled-components'

const bg = ({ section }) => {
  switch (section) {
    case 1:
      return 'linear-gradient(to right, #24c6dc, #514a9d);'

    default:
      return '#eee;'
  }
}

const PanelWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
