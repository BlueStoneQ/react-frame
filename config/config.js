
const path = require('path')

const imgDevPath = path.resolve(__dirname, '../assets/images')

// 这个在后期使用中 接入服务器时再配
export default {
  IMG_BASE_PATH: process.env.NODE_ENV !== 'production' ? imgDevPath : '这里到时候填充图片/静态文件服务器的地址'
}
