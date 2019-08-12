/* 
  模块化： 一个js就是一个模块
  浏览器端的 模块化： AMD  requireJS    CMD seajs
  define([], function(){

  })
  require([], function(){})
  
  服务端的 模块化     CommonJS   nodejs中的模块化
  require()
  module.exports

 */
//es6的模块化语法： 标准

/* 如何导入某个模块 */
// 从a.js模块中导入 a标量
// import { name, age, obj } from './a'
// console.log(name)
// console.log(age)
// console.log(obj)

// import './a'

import aa from './a'
console.log(aa)
