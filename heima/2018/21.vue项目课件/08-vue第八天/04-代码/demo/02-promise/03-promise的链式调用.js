const fs = require('fs')
// let p = new Promise((resolved, rejected) => {
//   fs.readFile('a.txt', 'utf8', (err, data) => {
//     if (err) {
//       rejected(err)
//     } else {
//       resolved(data)
//     }
//   })
// })

// let p2 = new Promise((resolved, rejected) => {
//   fs.readFile('b.txt', 'utf8', (err, data) => {
//     if (err) {
//       rejected(err)
//     } else {
//       resolved(data)
//     }
//   })
// })

// let p3 = new Promise((resolved, rejected) => {
//   fs.readFile('c.txt', 'utf8', (err, data) => {
//     if (err) {
//       rejected(err)
//     } else {
//       resolved(data)
//     }
//   })
// })
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

readData('a.txt')
  .then(data => {
    console.log(data)
    return readData('b.txt')
  })
  .then(data => {
    console.log(data)
    return readData('c.txt')
  })
  .then(data => {
    console.log(data)
    return readData('d.txt')
  })
  .then(data => {
    console.log(data)
  })

// // promise对象的then方法返回的还是一个promise对象
// p.then(data => {
//   console.log(data)
//   return p2
// })
//   .then(data => {
//     console.log(data)
//     return p3
//   })
//   .then(data => {
//     console.log(data)
//     return p4
//   })
//   .then(data => {
//     console.log(data)
//   })
