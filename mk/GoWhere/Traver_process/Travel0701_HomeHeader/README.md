# Travel-01

## Header布局

### stylus的使用

### iconfont的使用

###webpack.base.conf配置

配置路径的别名

```javascript
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles')
    }
  },
```

另外在css中引入别的css文件需要加`~`

```css
@import '~styles/varibles.styl'
```

