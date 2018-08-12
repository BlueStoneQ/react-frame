/**
 * 配置组件和路由path的映射关系
 * 1- 导入组件
 * 2- 将组件加入到路由中，与path映射起来
 * 3- 该组件要传给app.js（虚拟root）
 */
import React from 'react'
import { Route } from 'react-router-dom'

/**
 * 引入组件
 */
import { FirstTest } from '../page/webpackTest'
import { Game } from '../page/reactGame'
import { TodoListsPage } from '../page/mobxTodo'

const RouterMap = (props) => (
  <div>
    <Route exact path='/' component={FirstTest} />
    <Route path='/firstTest' component={FirstTest} />
    <Route path='/game' component={Game} />
    <Route path='/todoListsPage' component={TodoListsPage} />
  </div>
)

export default RouterMap
