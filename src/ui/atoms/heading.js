import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, font } from '../theme'

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`

const styles = css`
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  font-size: ${fontSize};
  font-family: ${font.primary};
  font-weight: 500;
  text-align: center;
  color: ${color.primary};
`

const Heading = styled(({ level, children, ...props }) => 
  React.createElement(`h${level}`, props, children)) `${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
}

Heading.defaultProps = {
  level: 1,
}

export { Heading }