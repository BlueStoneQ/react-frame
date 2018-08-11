/**
 * 游戏右侧的 to do等
 */
import React, { Component } from 'react'
import Board from './Board'
import '../../../style/less/reactGame.css'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }
  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) || false
    })
  }
  handleClick (i) {
    // 获得数组数据的一个副本 而不是指向原来的数组
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (this.calculateWinner(squares) || squares[i]) {
      // 终止函数运行
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      // squares: squares,
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      history: history.concat([{
        squares: squares
      }])
    })
  }
  // 判断胜负 -- 需要读取整个棋盘的squares状态
  calculateWinner (squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = this.calculateWinner(current.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    const moves = history.map((step, move) => {
      const desc = move
        ? 'Move #' + move
        : 'Game start'
      return (
        <li key={move}>
          <a href='#' onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    })
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares || []}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    )
  }
}

export default Game
