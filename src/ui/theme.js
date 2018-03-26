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
  primary: '#3897f0',

  backgroundLight: '#fafafa',
  backgroundWhite: '#fff',

  text: '#262626',
  textLight: '#999',

  border: '#efefef',
  borderDark: '#e6e6e6',
}

const font = {
  primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
}

export { globalStyles, color, font }