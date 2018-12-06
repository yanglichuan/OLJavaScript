<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h3>{{ obj.name }}</h3>
    <hr/>
    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>

    <div v-bind:title="title">鼠标点上去看一下</div>
    <div v-html="html"></div>

    <div :class="{'red': flag, 'blue': !flag}">我是一个div</div>
    <div :class="{'red': !flag}">我是另外一个一个div</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '你好 Vue.js App',
      obj: {name: 'zs',
            age: 18},
      list: ['1', '2', '3'],
      list1: [],
      title: "我是一个标题啊",
      html: "<h2>这是h2标题</h2>",
      flag: false,

    }
  }
}
</script>

<style>
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
