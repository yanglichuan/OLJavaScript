// 引入Vue构造函数 引入vue模块
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'

// 给vue安装vue-router插件
Vue.use(VueRouter)

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import User from '../components/User.vue'

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/user', component: User }
  ]
})

export default router
