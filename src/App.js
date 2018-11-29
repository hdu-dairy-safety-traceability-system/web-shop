import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages/index.jsx'
// @ref https://github.com/webpack/webpack/issues/215
import 'antd-mobile/dist/antd-mobile.css'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Pages/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
