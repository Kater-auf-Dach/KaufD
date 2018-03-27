import React from 'react'
import styled from 'styled-components'

import { ContactIcon } from '../../ui'

const ContactWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
`

const Contact = ({ item }) =>
  <ContactWrapper href={item.link} target="_blank" rel="noopener">
    <ContactIcon src={`/images/${item.name.toLowerCase()}.svg`} />
    {/* {item.name} */}
  </ContactWrapper>

export { Contact }
