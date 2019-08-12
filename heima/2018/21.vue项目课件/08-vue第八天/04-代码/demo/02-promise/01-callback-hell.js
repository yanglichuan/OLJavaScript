/*
  回调函数：把函数当成参数进行传递，当成参数传递的这个函数就叫回调函数

  什么时候用回调函数？
    只要有异步，就会有回调函数  ajax 定时器  事件
  js里面，回调函数是一个特性，js是单线程，js要提供很多的异步操作

  ajax方法 success error

  回调地狱： 回调函数是异步，有的时候，我们需要异步之间还会嵌套异步，
*/

// 按照顺序读取 a - b - c - d的内容
const fs = require('fs')
// 读取a文件
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    // 读取b文件
    fs.readFile('b.txt', 'utf8', (err, data) => {
      console.log(data)
      // 读取c文件
      fs.readFile('c.txt', 'utf8', (err, data) => {
        console.log(data)
        // 读取d文件
        fs.readFile('d.txt', 'utf8', (err, data) => {
          console.log(data)
        })
      })
    })
  }
})
