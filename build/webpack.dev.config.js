const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./config')

const ROOT_PATH = config.ROOT_PATH
const SRC_PATH = config.SRC_PATH

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    // 这个host用ipconfig在dos中查到 然后手机只要和pc在统一局域网中 就可以访问这个 而且 是pc与手机同步刷新的 可以暂时不考虑BrowserSync了
    // host: '192.168.1.114',
    host: '192.168.43.251',
    port: 3000,
    open: true,
    compress: true
    // hot: true
  },
  // 这个应该是成产时的config中写  -- build就是生产环境
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(SRC_PATH, 'style', 'less'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    // https://www.webpackjs.com/plugins/named-modules-plugin/
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
