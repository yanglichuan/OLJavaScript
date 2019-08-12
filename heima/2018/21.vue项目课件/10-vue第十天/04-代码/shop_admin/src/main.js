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

// 引入axios
import axios from 'axios'

// 把axios放到Vue的原型上， 将来所有的vue实例都能用
Vue.prototype.axios = axios

// 给axios配置默认值
// console.log(localStorage.getItem('token'))

// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

// 给axios设置请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 给config配置baseURL
    config.baseURL = 'http://localhost:8888/api/private/v1/'
    // 给config设置headers
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 使用elementui插件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
