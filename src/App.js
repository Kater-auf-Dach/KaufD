import React, { Component } from 'react'

import { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { globalStyles } from './ui/theme'

import { PageInner, Panel } from './ui'
import { MainTitle, MainSubtitle } from './modules/greeting/atoms'
import { Contacts } from './components/contacts'

const subtitle = '{frontend developer}'

injectGlobal`${normalize} ${globalStyles}`

class App extends Component {
  render() {
    return (
      <PageInner>
        <Panel section={1}>
          <MainTitle>Kirill Mikhaylin</MainTitle>
          <MainSubtitle>{subtitle}</MainSubtitle>
          <Contacts />
        </Panel>
      </PageInner>
    );
  }
}

export default App;
