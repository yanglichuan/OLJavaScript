#Node
##绑定数据
```javascript
{{msg}}
<div v-bind:"title">
<div v-html:"">
data () {
    return {
      msg: '你好 Vue.js App',
      obj: {name: 'zs',
            age: 18},
      list: ['1', '2', '3'],
      list1: [],
      title: "我是一个标题啊",
    }
  }
```