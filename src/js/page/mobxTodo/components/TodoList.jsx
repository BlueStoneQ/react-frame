/**
 * mobx的todo例子
 */
import React, { Component } from 'react'
import { observable, action, configure } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// 采用严格模式  只能@action修改@observable
// useStrict(true)
configure({ enforceActions: true })

export class TodoListStore {
  @observable todoList = []
  /**
   * 设置值
   * @param {string} name 要设置的key
   * @param {any} value 要设置的value
   */
  @action setValue = (name, value) => {
    this[name] = value
  }
  /**
   * 删除todoList中的某个值
   * @param {aaray} array
   * @param {num} index
   */
  @action reduce = (index) => {
    this.todoList.splice(index, 1)
  }
}

@observer
class TodoList extends Component {
  /**
   * 遍历渲染todo列表
   * @param {array} list 用来遍历渲染成lists的数据
   */
  getItemsRender (list) {
    const { reduce } = this.props.store
    const arr = list || []
    return arr.map((v, i) => {
      return (
        <Todo
          key={i}
          keyIndex={i}
          val={v}
          onDel={reduce}
        />
      )
    })
  }
  render () {
    const { todoList } = this.props.store
    return (
      <div className='todo-list-wrap'>
        { this.getItemsRender(todoList) }
      </div>
    )
  }
}

TodoList.propTypes = {
  store: PropTypes.object.isRequired
}

export default TodoList
