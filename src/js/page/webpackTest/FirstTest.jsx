import React from 'react'
import { cube } from './math'
import Icon from 'images/logo.jpg'
import '../../../style/less/test.less'

const FirstTest = () => (
  <div className='app-test font-app'>
    <div>
      Hello React 太棒了 彩虹 枫叶 害怕 发如雪 温暖的风
        的承诺书 人间失格 太宰治 React-hot-loader  Acg-Box
         5.cube(): {cube(6)}  123
    </div>
    <div className='img-box'>
      {/* { myIcon } */}
      <img src={Icon} alt='logo: max' />
    </div>
  </div>
)

export default FirstTest
