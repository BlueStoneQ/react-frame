# acg-box
A frame for React with webpack. It provides React + Redux + React-router-dom + ES6 + HRM + mobile synchronization.
And it will grow up and publish to the npm.

# ver.0
边做边设计吧 哪怕迭代 时间就在这里 容不得再踌躇了 肉贴肉搏杀吧
磨刀不误砍柴功 + 俯瞰的大局观 
各个功能模块可以独立开发 样式 jsx/js 等
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

# 参考
[webpack官网中文](https://www.webpackjs.com/guides/code-splitting/)
[17年6月的一篇博客](https://segmentfault.com/a/1190000009952845)



