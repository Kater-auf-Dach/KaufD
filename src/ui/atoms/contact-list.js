import React from 'react'
import styled from 'styled-components'

const ContactList = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 5rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 740px;
  }

  @media screen and (min-width: 992px) {
    width: 975px;
  }

  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
`

export { ContactList }
