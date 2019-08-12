import Vue from 'vue'
import Router from 'vue-router'
// 导入Login.vue组件
import Login from '@/components/Login'
// 导入Home.vue组件
import Home from '@/components/Home'
// 导入Users.vue组件
import Users from '@/components/Users'
// 导入Rights.vue组件
import Rights from '@/components/Rights'
// 导入Roles.vue组件
import Roles from '@/components/Roles'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // 给home路由配置子路由
      children: [
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/rights',
          name: 'rights',
          component: Rights
        },
        {
          path: '/roles',
          name: 'roles',
          component: Roles
        }
      ]
    }
  ]
})

// 给router对象注册导航守卫
// to: 要到哪儿去
// from: 从哪儿来
// next() 放行    next('/login') 去登录页
router.beforeEach((to, from, next) => {
  // 判断token中是否有值
  let token = localStorage.getItem('token')
  // 如果是login，也需要放行，如果拦截到的话
  if (to.path === '/login' || token) {
    // 如果有token，放行
    next()
  } else {
    // 如果没有token，去登录页
    next('/login')
  }
})

export default router
