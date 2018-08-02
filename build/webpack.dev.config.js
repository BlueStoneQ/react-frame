const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    // 这个host用ipconfig在dos中查到 然后手机只要和pc在统一局域网中 就可以访问这个 而且 是pc与手机同步刷新的 可以暂时不考虑BrowserSync了
    host: '172.16.74.126',
    port: 3000,
    open: true
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HMR',
      filename: path.join(__dirname, 'dist/index.html'),
      // 根据我们本地的index.html生成服务器上的index.html
      template: path.join(__dirname, 'index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};