/**
 * 只有render方法的组件 可以使用函数组件
 */
import React from 'react'
import PropTypes from 'prop-types'

function Square (props) {
  return (
    <button className='square' onClick={props.onClick}>
      { props.value }
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default Square
