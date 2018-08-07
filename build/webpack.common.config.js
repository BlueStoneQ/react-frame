/**
 * 这个应该是把公共的部分提供给webpack.dev.config.js和webpack.prod.config.js使用
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// https://www.webpackjs.com/guides/production/#split-css
// 使用extract-text-webpack-plugin遇见的坑
// https://blog.csdn.net/gezilan/article/details/80020417
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]-[hash].bundle.js'
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
        include: path.resolve('src'),
        enforce: 'pre',
        use: [
          'eslint-loader'
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        include: path.resolve('src'),
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
        // https://www.webpackjs.com/plugins/extract-text-webpack-plugin/#提取-sass-或-less
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }, {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          // url-可以不用使用file-loader,但是file-loader还是要安装的
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name]-[hash].[ext]',
          //     outputPath: 'img'
          //   }
          // }
          // https://blog.csdn.net/huangpb123/article/details/78561963
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]-[hash].[ext]',
              outputPath: 'img'
              // pulicPath: 项目部署后找取图片的路径 例如图片放在CDN可以写图片的CDN路径
            }
          }, {
            // https://github.com/tcoopman/image-webpack-loader
            loader: 'image-webpack-loader',
            options: {
              disable: true
            }
          }
        ]
      }, {
        // https://www.webpackjs.com/guides/asset-management/#加载字体
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    // https://www.webpackjs.com/plugins/extract-text-webpack-plugin/#修改文件名
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    // 其实我觉得删除这种粗活用rimraf 也可以搞定 写在脚本里哈哈
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'HMR',
      filename: path.join(__dirname, '../dist/index.html'),
      // 根据我们本地的index.html生成服务器--服务器在内存上啊喂 --上的index.html
      template: path.join(__dirname, '../src/template/index.html')
    })
  ]
}
