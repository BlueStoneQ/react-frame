/**
 * 这里暂时写dev的 后面我会加进来的
 */
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
// https://www.webpackjs.com/guides/production/#split-css
// 使用extract-text-webpack-plugin遇见的坑 -- 该插件会影响样式文件的热更替 所以放到生产环境中
// https://blog.csdn.net/gezilan/article/details/80020417
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.config')
const config = require('./config')

const ROOT_PATH = config.ROOT_PATH
const SRC_PATH = config.SRC_PATH

module.exports = merge(common, {
  // 这个应该是成产时的config中写  -- build就是生产环境
  mode: 'production',
  devtool: 'source',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(SRC_PATH, 'style', 'less'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    // https://www.webpackjs.com/plugins/extract-text-webpack-plugin/#修改文件名
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    // https://www.webpackjs.com/guides/tree-shaking/#压缩输出
    new UglifyJsPlugin({
      sourceMap: true
    }),
    // https://www.webpackjs.com/guides/production/#指定环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
