import { css } from 'styled-components'

const globalStyles = css`
  html, body {
    font-size: 10px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;    
  }


  *, 
  *::before, 
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }
`

const color = {
  text: '#fff',
  textSecond: '#000',

}

const font = {
  primary: 'Fira Code, Roboto, Helvetica, sans-serif',
}

export { globalStyles, color, font }