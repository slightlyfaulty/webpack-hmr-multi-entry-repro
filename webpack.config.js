const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	devtool: false,

	entry: {
		first: ['./src/first.js', './src/first.css'],
		second: ['./src/second.js', './src/second.css'],
		third: ['./src/third.js', './src/third.css'],
	},

	devServer: {
		hot: true,
		liveReload: false,
		static: process.cwd(),
		dev: {
			writeToDisk: true,
		},
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
