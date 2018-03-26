import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PageInner = ({ children, ...props }) =>
  <Wrapper {...props}>
    {children}
  </Wrapper>

PageInner.PropTypes = {
  children: PropTypes.node.isRequired,
}

export { PageInner }
