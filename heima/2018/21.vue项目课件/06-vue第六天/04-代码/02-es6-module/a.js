/* 
  如何导出内容
 */
/* 想要导出哪个变量，在这个变量的前面加 export关键字 */
let name = 'zs'
let age = 18

let obj = {
  name: 'ls'
}

// export { name, age, obj }

// 默认导出，导出的内容没有定死名字，导入的时候，变量名可以随便起

export default {
  name,
  age,
  obj
}
