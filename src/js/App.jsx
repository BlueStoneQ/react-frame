import React, { Component } from 'react'
import Game from './components/Game'
import '../style/less/test.less'
import '../style/less/reactGame.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        Hello React 太棒了 彩虹 枫叶 害怕 发如雪 温暖的风
        的承诺书
        <Game />
      </div>
    )
  }
}

export default App
