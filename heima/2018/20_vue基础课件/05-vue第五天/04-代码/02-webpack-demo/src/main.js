/* webpack的入口文件 */
/* 把index.html这个页面依赖到的所有的内容都加载进行 */

// 引入jquery
const $ = require("jquery")
const moment = require("moment")

$(function() {
  $("li:odd").css("color", "red")
  $("li:even").css("color", "green")

  console.log(moment())
})
