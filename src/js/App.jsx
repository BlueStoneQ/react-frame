import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import NavList from './router/NavList'

// var myIcon = new Image()
// myIcon.src = Icon

class App extends Component {
  render () {
    return (
      <div>
        <NavList />
      </div>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
