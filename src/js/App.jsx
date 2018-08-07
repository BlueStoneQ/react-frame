import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Game from './components/Game'
import '../style/less/test.less'
import '../style/less/reactGame.css'
import { cube } from './components/math'
import Icon from 'images/logo.jpg'

// var myIcon = new Image()
// myIcon.src = Icon

class App extends Component {
  render () {
    return (
      <div className='app font-app'>
        Hello React 太棒了 彩虹 枫叶 害怕 发如雪 温暖的风
        的承诺书  React-hot-loader  Acg-Box  5.cube(): {cube(6)}  123
        tongjuecanliu
        <Game />
        <div className='img-box'>
          {/* { myIcon } */}
          <img src={Icon} alt='logo: max' />
        </div>
      </div>
    )
  }
}

// react-hot-loader
export default hot(module)(App)
