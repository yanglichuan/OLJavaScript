<template>
  <!-- 一个组件的模板 -->
  <div class="home">
    <!-- 入口 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/user">用户</router-link>
    <!-- 出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello 单文件组件',
      name: 'hucc'
    }
  }
}
</script>

<style>
/* .home {
  width: 100px;
  height: 100px;
  background-color: pink;
} */
</style>

