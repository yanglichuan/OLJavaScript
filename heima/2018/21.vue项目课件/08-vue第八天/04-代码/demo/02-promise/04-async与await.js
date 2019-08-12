// async和await就是两个关键字
// async: 用于描述一个函数,,,,只有在async描述的函数中才可以使用await

// await可以用在promise对象之前，会等待promise的结果
const fs = require('fs')
function readData(path) {
  return new Promise((resolved, rejected) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        rejected(err)
      } else {
        resolved(data)
      }
    })
  })
}
// p是一个promise对象
async function fn() {
  let data1 = await readData('a.txt')
  let data2 = await readData('b.txt')
  let data3 = await readData('c.txt')
  let data4 = await readData('d.txt')
  console.log(data1, data2, data3, data4)
}

fn()
