import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ContactIcon } from '../../ui'

const ContactWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
`

const Contact = ({ item }) =>
  <ContactWrapper href={item.link} target={item.tab ? "_blank" : "_self"} rel="noopener">
    <ContactIcon src={`/images/${item.name.toLowerCase()}.svg`} />
  </ContactWrapper>

Contact.propTypes = {
  item: PropTypes.object.isRequired,
}


export { Contact }
