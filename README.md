# acg-box
A webApp for everyone who loves Acg. It`s the first WebApp of me. 

# ver.0
边做边设计吧 哪怕迭代 时间就在这里 容不得再踌躇了 肉贴肉搏杀吧
## 搭建架子
1. React
2. babel
3. 静态服务器
4. webpack
5. BrowserSync

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

## React栈中用webpack-dev-server进行HRM 有个神器
[react-hot-loader](https://www.webpackjs.com/guides/hot-module-replacement/#其他代码和框架)



