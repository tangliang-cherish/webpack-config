var htmlWebpackPlugin = require("html-webpack-plugin");//引入webpack插件：：html-webpack-pulugin
var path = require("path");
module.exports = {
	entry:'./web/app.js',
	output:{
		path: path.resolve('./dist'),
		filename:'js/[name]-bundle.js',
	},
	//插件使用  //  babel-loader && babel-core
	module: {
	  rules: [
		    {
		 	test: /\.js$/,	//正则匹配需要转换es6语法的文件
		 	include:path.resolve(__dirname,'web') ,
		 	exclude:path.resolve(__dirname,'node_modules') ,//指定插件模块 加快打包速度
		 	loader: "babel-loader" // ES6语法插件
		 },
		 //html插件  html-loader
		 {
		 	test:/\.ejs$/,
		 	loader:'ejs-loader'
		 },
		 {
		 	//css插件
		 	test:/\.(css|less)$/,
		 	//引用css样式插件
		 	loaders:['style-loader','css-loader',{
		 		//postcss-loader插件配置
		 		loader:"postcss-loader",
		 		options:{
		 			//配置需要引用的css插件
		 			plugins:[
		 				//css@import处理
		 				require('postcss-import'),
		 				//css浏览器前缀处理
		 				require('autoprefixer')
		 			],
		 			browser:['last 5 versions']
		 		}
		 	},'less-loader']
		 },
	  ]
	},
	//插件使用
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body',
		}),
	]
}
