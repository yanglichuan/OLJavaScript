const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname, './src/index.html'),
	filename: 'index.html',
})

// 向外暴露一个打包的配置对象
module.exports = {
	mode: 'production',  // development  production
	plugins: [
		htmlPlugin
	],
	module: { //要打包的第三方模块
		rules: [
			{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	},
	resolve: { // 省略的后缀名
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@': path.join(__dirname, './src')
		}
	}
}