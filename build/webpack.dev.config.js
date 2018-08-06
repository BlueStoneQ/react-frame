const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[hash]bundle.js'
  },
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        enforce: 'pre',
        use: [
          'eslint-loader'
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        ]
      }, {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]2.[ext]',
              outputpath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 其实我觉得删除这种粗活用rimraf 也可以搞定 写在脚本里哈哈
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'HMR',
      filename: path.join(__dirname, '../dist/index.html'),
      // 根据我们本地的index.html生成服务器--服务器在内存上啊喂 --上的index.html
      template: path.join(__dirname, '../src/template/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
