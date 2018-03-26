import React, { Component } from 'react'

import { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { globalStyles } from './ui/theme'

import { PageInner, Panel } from './ui'
import { MainTitle, MainSubtitle } from './modules/greeting/atoms'

const title = '.{ Kirill Mikhaylin }'

injectGlobal`${normalize} ${globalStyles}`

class App extends Component {
  render() {
    return (
      <PageInner>
        <Panel section={1}>
          <MainTitle>{title}</MainTitle>
          <MainSubtitle>Frontend developer</MainSubtitle>
        </Panel>
      </PageInner>
    );
  }
}

export default App;
