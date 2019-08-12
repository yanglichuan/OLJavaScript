// promise写异步的代码提供了一种新的方式
// 缺点是啥：回调地狱
// setTimeout(function() {
//   console.log('aaaa')
//   setTimeout(function() {
//     console.log('bbb')
//   }, 1000)
// }, 1000)
// promise内部封装了一个异步的任务
var p = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('aaa')
  }, 1000)
})

p.then(function(data) {
  console.log(data)
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve('bbb')
    }, 1000)
  })
}).then(function(data) {
  console.log(data)
})
