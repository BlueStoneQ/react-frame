# acg-box
A frame for React with webpack. It provides React + Redux + React-router-dom + ES6 + HRM + mobile synchronization.
And it will grow up and publish to the npm.

# 命令行

## npm start
启动本地服务器 开发调试时使用

## npm run build 
打包项目 提供给服务器

## npm run clean
删除dist目录(之前打包的文件)

## npm run lint
对js/jsx及src下的文件进行eslint代码规范检查

## npm run lint-fix
对js/jsx及src下的文件进行eslint代码不规范的地方进行规范化修补(一般不这样用 因为有些自动修复的调整很奇怪)

## npm run watch
启用webpack的watch模式进行打包（该模式下 代码一有所改动就会自动打包）(在satrt中 因为HRM被启动 所以该选项会默认开启)


# 目录说明
—— assets                                 *// 放置静态文件的目录*
 |—— font                                   // 放置字体文件
 |—— images                                 // 放置图片
—— build                                  *// 放置webpack配置文件的地方*
 |—— config                                 // 其他几个配置公共使用的一些配置项 例如：公共路径
 |—— webpack.common.config.js               // 开发环境 + 产品环境 都会使用到的webpack配置
 |—— webpack.dev.config.js                  // 开发环境 会使用到的webpack配置
 |—— webpack.prod.config.js                 //产品环境 会使用到的webpack配置
—— config                                *// 一些base路径的配置性的内容*
 |—— config.js                              // 一些base路径的配置性的内容
—— dist                                   *// webpack打包生成的项目文件 放在服务器上*
—— node_modules                          *// 依赖*
—— src                                   *// 我们的主要业务源代码*
 |—— js                                     // 放置js/jsx文件
   |—— components                             **// 放置业务公共组件**
   |—— page                                   **// 放置页面 页面是来使用组件的 页面构成整个项目**
     |—— page1                                    // 页面1
       |—— components                             // 页面1中的组件
     |—— page2
     ...
   |—— router                                 **// 路由组件**
 |—— style                                  // 放置样式文件
   |—— less                                   **// 放置less文件 less中的文件名与 src/page 下的各个页面名一一对应**
 |—— template                               // 放置模板文件 提供给webpack的HtmlWebpackPlugin 这里我们就用html了 同时也是根DOM元素的所在
 |—— index.jsx                              // 将React 根组件挂载到真实的DOM上            

# 迭代企划
## ver.0
边做边设计吧 哪怕迭代 时间就在这里 容不得再踌躇了 肉贴肉搏杀吧
磨刀不误砍柴功 + 俯瞰的大局观 
各个功能模块可以独立开发 样式 jsx/js 等
以后不要一次提交太多
一个功能写完就提交
要不然后面翻阅起来查找当时解决问题的关键点 关键点就不明确了

**[2018-9-12]**
至此 React-frame-work ver.0版终于搭建好了
React + webpack + HRM + babel(es6/7) + eslint + mobx + React-router-dom + 基本的示例
可以进行基本的前后端分离模式下 -- 前端独立开发
后期在项目实际业务中 发现的大的不足和更新 会及时更新到ver.1中
而小的不足  会继续在ver.0 版本中升级  例如图片等base路径的配置
愿这个脚手架着装成长 成为一个具有生产力的优秀辅助
后期准备放到npm上 到时候 可以像create-react-app一样 一个命令行就把整个项目架子给你生成好
里面的几个例子暂时留着做参考
### 遗留问题：
1. favicon 问题的解决
2. json-loader 引入
3. mobx-react-devtools
4. nodemon
5. cross-env
6. 以前用过一个全屏报错标红的包 记不起名字了 后面加上 挺好用的
7. axios

## ver.1
需求驱动加入mocha等
1. mocha
2. npm发布

## 约定
按功能模块放在src/page 下 每一个功能模块{ 页面 + 组件 + 独立的一个样式文件在style下 }
## 搭建架子
1. React
2. babel
3. 静态服务器
4. webpack
5. mobx
6. React-router-dom
5. ~~BrowserSync~~

# 备忘
## 换一个当电脑换一个局域网时 启动webpack-dev-server报错
这个时候需要我们在dos中ipconfig查一下本地ip 然后webapck-dev-server在webpack配置中得host改成这个ip
卧槽 原来这个ip是会变得啊 需要查查

# 关键技术点解决方案
## pc与手机都可以访问项目并同步刷新解决方案
在webpack的配置文件中 配置webpack-dev-server的devServer项：
1. host: '172.16.74.126'  *这个ip在dos中用ipconfig查出来*
2. 手机要保持与pc在同一局域网中，我是直接电脑开个wife，手机连上就ok了
3. 当然，端口号保持一致是必须的
## vsCode关于装饰器的使用报错
文件 -- 设置 -- 首选项 -- ‘experimentalDecorators’ 设置为‘true’
[参考这篇帖子](https://blog.csdn.net/yiifaa/article/details/78862507)
## elsint关于ES7语法（例如装饰器@）报错
[babel-eslint](https://www.npmjs.com/package/babel-eslint)

## React栈中用webpack-dev-server进行HRM 有个神器
[react-hot-loader](https://www.webpackjs.com/guides/hot-module-replacement/#其他代码和框架)

## mobx中useStrict在mobx4中的新写法
```
import {configure} from 'mobx'
configure({ enforceActions: true })
```
[csdn帖子](https://blog.csdn.net/greekmrzzj/article/details/79861787)
[mobx3->mobx4迁徙说明](https://github.com/mobxjs/mobx/wiki/Migrating-from-mobx-3-to-mobx-4#things-that-just-have-moved)

## React-router-dom使用遇到的坑啊
所以，用HashRouter吧
[帖子](https://www.cnblogs.com/erduyang/p/6757788.html)

# 参考
[webpack官网中文](https://www.webpackjs.com/guides/code-splitting/)
[17年6月的一篇博客](https://segmentfault.com/a/1190000009952845)



