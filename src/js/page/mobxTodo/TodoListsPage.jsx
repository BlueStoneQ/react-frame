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
  '生而为人'
]

class TodoListsPage extends Component {
  componentDidMount () {
    console.log('开始渲染mobx')
    const { setValue } = todoListStore
    setValue('todoList', testData)
    console.log(`此刻的 todoList: ${todoListStore.todoList}`)
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
