# 项目打包上线

## 按需加载

- 1 修改 `router/index.js` 中导入组件的语法

```js
// 使用：
const Home = () => import('@/components/home/Home')
// 替换：
// import Home from '@/components/home/Home'

// 给打包生产的JS文件起名字
const Home = () => import(/* webpackChunkName: 'home' */ '@/components/home/Home')

// chunkName相同，将 goods 和 goods-add 两个组件，打包到一起
const Goods = () => import(/* webpackChunkName: 'goods' */'@/components/goods')
const GoodsAdd = () => import(/* webpackChunkName: 'goods' */'@/components/goods-add')
```

- 2 修改 `/build/webpack.prod.conf.js` 中的chunkFilename

```js
{
  // [name] 代替 [id]
  chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
}
```



## 使用CDN

把我们需要使用的一些第三方包，不打包了，只打包自己项目的内容

如果是第三方的包，直接引入cdn的地址

- [开源项目 CDN 加速服务](https://www.bootcdn.cn/)
- 1 在 `index.html` 中引入CDN提供的JS文件
- 2 在 `/build/webpack.base.conf.js` 中（resolve前面）添加配置 externals
- **注意**：通过CDN引入 element-ui 的样式文件后，就不需要在 main.js 中导入 element-ui 的CSS文件了。所以，直接注释掉 main.js 中的导入 element-ui 样式即可
- `externals`配置：

```js
externals: {
  // 键：表示 导入包语法 from 后面跟着的名称
  // 值：表示 script 引入JS文件时，在全局环境中的变量名称
  vue: 'Vue',
  axios: 'axios',
  'vue-router': 'VueRouter',
  'element-ui': 'ELEMENT',
}

import ElementUI from 'element-ui'
```



# vuex基本介绍

[中文文档](https://vuex.vuejs.org/zh/guide/)

## vuex基本概念

vuex是vue的状态管理工具，状态即数据。 状态管理就是管理vue中的数据

注意：

+ 不是所有的场景都适用于vuex，只有在必要的时候才使用vuex,如果不必要，尽量别用
+ 使用了vuex之后，会附加更多的框架中的概念进来，增加了项目的复杂度

## vuex的优点

+ vuex用于解决组件通讯的问题
+ vuex可以集中的管理vue项目中用到的所有数据

## 为什么要使用vuex

+ 在大型的项目中，组件通讯会变得很混乱，使用vuex可以统一管理组件之间的通讯

# vuex使用

## store与state

+ 安装

```bash
npm i vuex
```

+ 引包

```html
  <!-- 引包 -->
  <script src="./node_modules/vue/dist/vue.js"></script>
  <script src="./node_modules/vuex/dist/vuex.js"></script>
```

+ 使用

```js
// 使用vuex
// 1.创建Store，用于存储数据和操作数据
const store = new Vuex.Store({
  //2. 指定state属性，用于提供数据
  // 状态，类似于data，用于提供数据
  state: {
    count: 1
  }
})

//3. 使用vuex中的数据
console.log(store.state.count)
```

## mutations的使用

+ 修改vuex中的数据，必须通过 mutations进行修改，不能直接修改 

```js
// 如果要修改state，需要在mutations的方法修改
mutations: {
  // 添加一个方法
  // state：表示state对象
  add (state) {
    state.count++
  }
}

//触发mutations
// 想要修改state，必须触发mutations提供的方法
store.commit('add')
```

+ 带参数（Payload）

```js
// 定义mutations
// 如果要修改state，需要在mutations的方法修改
mutations: {
  addNum (state, num) {
    state.count += num
  }
}

// 提交mutations
store.commit('addNum', 5)
```

+ payload载荷应该是一个对象

```js
// 定义mutations
// 如果要修改state，需要在mutations的方法修改
mutations: {
  addNum (state, obj) {
    state.count += obj.num
  }
}

// 提交mutations
store.commit('addNum', {num: 5})
```

## vuex配合vue使用

+ 定义store

```js
// 1. 创建store
const store = new Vuex.Store({
  state: {
    count: 10
  }
})
```

+ 定义vue实例

```js
// 2. 创建vue实例
const vm = new Vue({
  el: '#app',
  // 3. 将store与vue实例关联
  store
})
```

+ 关联store与vue实例

```js
// 3. 将store与vue实例关联
store：store
```

+ 在vue实例中使用store的数据

```html
<div id="app">
  <!-- 4. 使用数据 -->
<h1>直接使用vuex中的数据{{$store.state.count}}</h1>
</div>
```



+ 点击按钮，修改store中的数据

```html
<div id="app">
  <!-- 4. 使用数据 -->
  <h1>直接使用vuex中的数据{{$store.state.count}}</h1>
  <button @click="add">修改数据</button>
</div>

<script>
// 1. 创建store
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      addCount (state) {
        state.count++
      }
    }
  })
  
  // 2. 创建vue实例
  const vm = new Vue({
    el: '#app',
    // 3. 将store与vue实例关联
    store,
    methods: {
      add () {
        this.$store.commit('addCount')
      }
    }
  })
</script>
```

+ devtools中查看vuex



# TodoMVC

## 介绍

[TodoMVC](http://todomvc.com/examples/vue/)

## 结构搭建

+ [静态页面](https://github.com/tastejs/todomvc-app-template/)

## 组件划分

+ 新建三个组件

```html
Header.vue
Main.vue
Footer.vue

为了演示组件之间的通讯
```

## 项目中使用vuex

+ 安装

```bash
npm i vuex
```

+ 新建`store/index.js`，类似于router/index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// state用于存储数据
const state = {

}

export default new Vuex.Store({
  state
})

```

+ 在main.js中导入

```js
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
```

## 展示任务列表-组件中如何使用vuex的数据

## 通过表单元素修改vuex的数据

## 添加todo

## mapMutations的使用

## 删除任务

## 统计未完成的任务

## 展示隐藏清除按钮

## actions的讲解

## modal分模块的解释

