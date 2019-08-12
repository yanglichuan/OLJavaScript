/* 项目中的资源进行打包 */
/* 
  loader
  1. 普通的js文件 （webpack天生就解析js模块）
  2. css文件 （style-loader  css-loader）
  3. less文件 (style-loader css-loader less-loader)
  4. 图片     (url-loader/file-loader)  小图片： url-loader   大图片：file-loader
  5. 字体文件 (url-loader/file-loader) 和图片一样
  6. babel  处理高版本ES的js文件  es5
 */

/* 
  插件：
    1. html-webpack-plugin:  自动生成一个html文件，并且把打包好的文件自动引入
      template  自己指定一个需要生成模板
    2. hot-module-replacement-plugin: 如果hot:true
 */

/* 
  devServer:  我们开发过程中，如果每次都用webpack打包的话，该一行代码就需重新打包

  webpack-dev-server:  可以开启一个服务器， 自动打开浏览器  自动监视文件的变化，自动去重新打包，自动刷新浏览器
 */

let num = 11
console.log(num)
import './js/index.js'
import './css/index.css'
import './less/index.less'
