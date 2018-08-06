const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    // 这个host用ipconfig在dos中查到 然后手机只要和pc在统一局域网中 就可以访问这个 而且 是pc与手机同步刷新的 可以暂时不考虑BrowserSync了
    // host: '192.168.1.114',
    host: '172.16.74.126',
    port: 3000,
    open: true,
    compress: true
    // hot: true
  },
  resolve: {
    // 会对未加后缀的引入文件名去分别依次加上这几个后缀在工程中搜寻
    extensions: ['.js', '.json', '.jsx'],
    // 给常用路径取个别名吧
    alias: {
      src: path.join(__dirname, '../src'),
      images: path.join(__dirname, '../src/images'),
      less: path.join(__dirname, '../src/style/less')
    }
  },
  // 这个应该是成产时的config中写  -- build就是生产环境
  // mode: 'production',

  plugins: [
    // https://www.webpackjs.com/plugins/named-modules-plugin/
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
