/**
 * 这里暂时写dev的 后面我会加进来的
 */
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// https://www.npmjs.com/package/optimize-css-assets-webpack-plugin
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
// https://www.webpackjs.com/guides/production/#split-css
const common = require('./webpack.common.config')

module.exports = merge(common, {
  // 这个应该是成产时的config中写  -- build就是生产环境
  mode: 'production',
  devtool: 'source',
  optimization: {
    minimizer: [
      // js mini-生产环境下,uglify打包代码时会自动删除不可达代码
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      // css mini
      // 压缩MiniCssExtractPlugin输出的css文件，避免重复引用等
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.(css|less)$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          // safe: true,
          discardComments: { removeAll: true }
        },
        canPrint: true
      })
    ]
  },
  plugins: [
    // https://www.webpackjs.com/guides/production/#指定环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
