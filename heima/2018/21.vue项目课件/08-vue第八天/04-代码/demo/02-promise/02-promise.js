/* 
  promise: 承诺，许诺
  Promise: 是一个构造函数，用于创建要给promise对象
  promise对象内部会封装一个异步的任务

  promise有3种状态
    pending:  异步任何正在执行
    rejected： 异步任何执行失败了
    fulfilled: 异步任务执行成功了
  promise:承诺：  pending---> rejected   pending--->fulfilled
*/
// 创建了一个promise对象
const fs = require('fs')
// 第一个参数：resolved 成功的时候要执行的函数
// 第二个参数：rejected: 失败的时候要执行的函数
let p = new Promise(function(resolved, rejected) {
  // 异步的操作
  fs.readFile('a.tx1', 'utf8', (err, data) => {
    if (err) {
      // 说明读取文件失败
      rejected(err)
    } else {
      // 读取文件成功了
      resolved(data)
    }
  })
})

// promise对象如何使用
// then:处理成功的请求， function ----> resolved
// 成功的时候，then里面的function就会执行
p.then(function(data) {
  console.log(data)
}).catch(function(err) {
  // catch中传递的function会在失败的时候执行
  console.log(err)
})
