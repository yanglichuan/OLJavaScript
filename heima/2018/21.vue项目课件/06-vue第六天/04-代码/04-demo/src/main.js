import Vue from 'vue'
import App from './App'
import router from './router'

// 关闭生产提示的
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
