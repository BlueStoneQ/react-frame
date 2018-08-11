/**
 * 暂时export无调用代码块 -- 用来测试webpack中的Tree sahking
 */

/**
 * 测试DefinePlugin对process.env.NODE_ENV的设定
 * --任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量
 */
console.log('【process.env.NODE_ENV】: ' + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
  console.log('【Looks like we are in development mode!】')
}

export function square (x) {
  return x * x
}

export function cube (x) {
  return x * x * x
}
