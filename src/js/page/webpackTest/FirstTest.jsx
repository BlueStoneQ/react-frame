import React from 'react'
import { cube } from './math'
import Icon from 'images/logo.jpg'
import '../../../style/less/test.less'
// 对于未引入的样式文件 webpack是不会打包引入的
import '../../../style/less/comStyle/commom.less'

const FirstTest = () => (
  <div className='app-test font-app border-radius-5'>
    <div>
      Hello React 太棒了 彩虹 枫叶 害怕 发如雪 温暖的风
        的承诺书 人间失格 <span className='font-h2'>太宰治</span> React-hot-loader  Acg-Box
         5.cube(): {cube(6)}  123  有梦不难
    </div>
    <div className='img-box'>
      {/* { myIcon } */}
      <img src={Icon} alt='logo: max' />
    </div>
  </div>
)

export default FirstTest
