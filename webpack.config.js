var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
	    path: path.resolve(__dirname, './build'),
	    filename: 'bundle.js',
	},
    module: {
	    //加载器配置
	    loaders: [
	        {
        		test: /\.css$/,
        		loader: 'style-loader!css-loader'//添加对样式表的处理
      		},
	        { 
	        	test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
	    	},
	        { 
	        	test: /\.js$/,loader: 'babel-loader',
	        	exclude: /node_modules/, 
	        	query: {
	        		presets: ['es2015','react']
	        	}
	    	}
	    ]
	},
};