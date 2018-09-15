import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages'
import '@/CSS/App.css'

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
