/**
 * 这个应该是把公共的部分提供给webpack.dev.config.js和webpack.prod.config.js使用
 */
const path = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./config')

const ROOT_PATH = config.ROOT_PATH
const SRC_PATH = config.SRC_PATH
const BUILD_PATH = config.BUILD_PATH

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.jsx'),
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    // https://segmentfault.com/q/1010000011438869/a-1020000011441168
    filename: process.env.NODE_ENV !== 'production' ? 'js/[name].[hash:7].bundle.js' : 'js/[name].[chunkhash].bundle.js'
  },
  resolve: {
    // 会对未加后缀的引入文件名去分别依次加上这几个后缀在工程中搜寻
    extensions: ['.js', '.json', '.jsx'],
    // 给常用路径取个别名吧
    alias: {
      src: SRC_PATH,
      page: path.resolve(SRC_PATH, 'js', 'page'),
      components: path.resolve(SRC_PATH, 'js', 'components'),
      images: path.resolve(ROOT_PATH, 'assets', 'images'),
      less: path.resolve(SRC_PATH, 'style', 'less')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        enforce: 'pre',
        use: [
          'eslint-loader'
        ]
      }, {
        test: /\.(js|jsx)$/,
        include: SRC_PATH,
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          'babel-loader'
        ]
      }, {
        test: /\.html$/,
        include: path.resolve(SRC_PATH, 'template'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        ]
      }, {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: path.resolve(ROOT_PATH, 'assets', 'images'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
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
              name: '[name].[hash:7].[ext]',
              outputPath: 'static/img'
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
        include: path.resolve(ROOT_PATH, 'assets', 'font'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]',
              outputPath: 'static/font'
              // pulicPath: 项目部署后找取图片的路径 例如图片放在CDN可以写图片的CDN路径
            }
          }
        ]
      }, {
        // https://www.webpackjs.com/guides/asset-management/#加载数据
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }, {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    // 其实我觉得删除这种粗活用rimraf 也可以搞定 写在脚本里哈哈
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'React frame',
      filename: path.resolve(ROOT_PATH, 'dist/index.html'),
      // 根据我们本地的index.html生成服务器--服务器在内存上啊喂 --上的index.html
      template: path.resolve(SRC_PATH, 'template/index.html')
    })
    // https://www.webpackjs.com/guides/code-splitting/#防止重复-prevent-duplication-
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ]
}
