// main.js就是整个项目的入口文件
// 将来所有的依赖的内容都在main.js

// nodejs的模块化 ，放到浏览器中不能运行
// webpack中，什么模块化的语法都能用， 最终webpack会打包成浏览器能识别的语法
// const $ = require("jquery")
// const sayHi = require("./tools")

import $ from "jquery"
import sayHi from "./tools"

$(function() {
  sayHi()
  let lis = document.querySelectorAll("li")
  lis.forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.color = "red"
    } else {
      item.style.color = "green"
    }
  })
})
