import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {GlobalStyle} from './theme/globalStyle'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
