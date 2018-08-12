/**
 * 用来做页面导航和布局的组件
 * 1- 左侧固定宽度的导航栏
 * 2- 右侧自适应宽度的content
 * 3- 该NavList为pc端布局准备
 * 4- 移动端/新的路由布局请重新设计该组件
 */
import React from 'react'
import { HashRouter as Router, NavLink as Link } from 'react-router-dom'
import RouterMap from './RouterMap'
import '../../style/less/navList.less'

const NavList = (props) => (
  <Router>
    <div className='nav-wrap'>
      <div className='nav-left'>
        <ul>
          <li>
            <Link
              to='/firstTest'
              activeClassName='nav-selected'
            >
          FirstTest
            </Link>
          </li>
          <li>
            <Link
              to='/game'
              activeClassName='nav-selected'
            >
          Game
            </Link>
          </li>
          <li>
            <Link
              to='/todoListsPage'
              activeClassName='nav-selected'
            >
          TodoListsPage
            </Link>
          </li>
        </ul>
      </div>
      <div className='nav-right'>
        <RouterMap />
      </div>
    </div>
  </Router>
)

export default NavList
