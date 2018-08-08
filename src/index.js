/**
 * 这里只是将React根节点用ReactDOM挂载到根DOM节点上去
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './js/App'
// https://www.webpackjs.com/guides/code-splitting/#动态导入-dynamic-imports-
// https://github.com/stefanpenner/es6-promise
require('es6-promise').polyfill()

ReactDOM.render(<App />, document.getElementById('root'))

// 用命令行参数 --hot以后 貌似可以不用这里了
// if (module.hot) {
//   module.hot.accept('./App.js', function() {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//   })
// }
