/**
 * todo中的每一个条目
 * 1- state存在的意义就是：不要直接修改dom元素 而是通过修改state映射到dom上
 * 2- 所以这里的点击事件 就是利用回调把该组件自身的信息反馈给父组件 而对state的修改/渲染由父组件来动作
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  render () {
    return (
      <div className='todo-wrap'>
        <span className='todo-text font-item'>{ this.props.val }</span>
        <span
          className='todo-suffix-del font-item'
          onClick={() => this.props.onDel(this.props.keyIndex)}
        >
          ×
        </span>
      </div>
    )
  }
}

Todo.propTypes = {
  val: PropTypes.string.isRequired,
  keyIndex: PropTypes.number.isRequired,
  onDel: PropTypes.func.isRequired
}

export default Todo
