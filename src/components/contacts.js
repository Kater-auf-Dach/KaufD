import React from 'react'

import { ContactList, Contact } from '../ui'

import { contacts } from '../contacts'

const Contacts = () =>
  <ContactList>
    {contacts.map((contact, i) => <Contact item={contact} key={i} />)}
  </ContactList>

export { Contacts }
