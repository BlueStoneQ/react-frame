/**
 * 这里保存webpack会用到的一些公共配置量 供其他几个config文件读取
 */
const path = require('path')

module.exports = {
  ROOT_PATH: path.resolve(__dirname, '../'),
  SRC_PATH: path.resolve(__dirname, '../', 'src'),
  BUILD_PATH: path.resolve(__dirname, '../', 'dist')
}
