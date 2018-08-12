/**
 * 该模块的页面 调用 组织各个组件
 */
import React, { Component } from 'react'
import TodoList, { TodoListStore } from './components/TodoList'
import 'less/TodoListsPage.less'

// [核心]这里把TodoListStore实例通过props传给TodoList组件
const todoListStore = new TodoListStore()

// 测试用数据
const testData = [
  '人间失格',
  '太宰治',
  '生而为人',
  '追梦赤子心',
  '当幸福来敲门',
  '十月的天空 The Sky in october'
]

class TodoListsPage extends Component {
  componentDidMount () {
    const { setValue } = todoListStore
    setValue('todoList', testData)
  }
  render () {
    return (
      <TodoList
        store={todoListStore}
      />
    )
  }
}

export default TodoListsPage
