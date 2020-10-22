const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	devtool: false,

	entry: {
		first: ['./src/first.js', './src/first.css'],
		second: ['./src/second.js', './src/second.css'],
	},

	devServer: {
		hot: true,
		writeToDisk: true,
		transportMode: 'ws',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin(),
	],
}
