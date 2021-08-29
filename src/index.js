import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import WebFont from 'webfontloader'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

WebFont.load({
  google: {
    families: ['Roboto', 'sans-serif']
  }
})

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
