/**
 * 这里暂时写dev的 后面我会加进来的
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  // 这个应该是成产时的config中写  -- build就是生产环境
  mode: 'production',
  plugins: [
    // https://www.webpackjs.com/guides/tree-shaking/#压缩输出
    new UglifyJsPlugin()
  ]
})
