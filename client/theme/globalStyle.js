import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html, body {
    width: 100%;
    height: 100vh;
    font-family: 'Heebo', sans-serif;
    font-size: 1.05em;
    background-color: #32D8D9;
    max-width: 2560px;
    letter-spacing: .5px;
  }

  body {
    z-index: 0;
  }

  // For star rating:
  .checked {
    color: #32D8D9;
  }

  input[type='text'] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #36008d;
    background-color: #ecebeb;
    font-size: 0.75em;
    width: 100%;
  }

  input[type='number'] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #36008d;
    background-color: #ecebeb;
    font-size: 0.75em;
    width: 100%;
  }

  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #36008d;
    background-color: #ecebeb;
`
