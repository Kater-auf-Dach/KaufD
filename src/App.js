import React, { Component } from 'react'

import { injectGlobal } from 'styled-components'
import { normalize } from 'styled-normalize'
import { globalStyles } from './ui/theme'

import { PageInner, Heading, Panel } from './ui'

const title = '.{ Kirill Mikhaylin }'

injectGlobal`${normalize} ${globalStyles}`

class App extends Component {
  render() {
    return (
      <PageInner>
        <Panel section={1}>
          <Heading>{title}</Heading>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Panel>
        <Panel section={3}>
          <Heading level={2}>Title 2</Heading>
        </Panel>
      </PageInner>
    );
  }
}

export default App;
