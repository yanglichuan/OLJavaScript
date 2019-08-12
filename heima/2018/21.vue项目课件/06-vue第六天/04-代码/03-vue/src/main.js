/* 整个webpack的入口文件 */
// 引入Vue构造函数 引入vue模块
import Vue from 'vue'

// 导入组件
import App from './App.vue'

import router from './router'

// 创建vue实例
const vm = new Vue({
  el: '#app',
  // 渲染组件到页面，调用render方法
  render: c => c(App),
  router
})
