import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Game from './page/reactGame/Game'
import TodoListsPage from './page/mobxTodo/TodoListsPage'
import FirstTest from './page/webpackTest/FirstTest'
import '../style/less/test.less'

// var myIcon = new Image()
// myIcon.src = Icon

class App extends Component {
  render () {
    return (
      <div>
        <FirstTest />
        <Game />
        <TodoListsPage />
      </div>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
