import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Game from './components/Game'
import '../style/less/test.less'
import '../style/less/reactGame.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        Hello React 太棒了 彩虹 枫叶 害怕 发如雪 温暖的风
        的承诺书  React-hot-loader
        <Game />
      </div>
    )
  }
}

export default hot(module)(App)
