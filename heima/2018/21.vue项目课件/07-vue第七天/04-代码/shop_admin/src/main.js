// import Vue from 'vue'
// 默认导入的是vue.runtime.esm.js
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入elementUI创建
import ElementUI from 'element-ui'
// 引入elementui的样式
import 'element-ui/lib/theme-chalk/index.css'

// 引入通用的样式
import '@/assets/common.css'

// 使用elementui插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
