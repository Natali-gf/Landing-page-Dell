
var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
	mode,
	devtool,
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 8080,
		hot: true,
		open: true,
	},
	stats: {
		children: false,
		modulesSpace: 0,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					'postcss-loader',
					{
						loader: "sass-loader",
						options: {
							implementation: require.resolve("sass"),
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(ttf|woff|woff2|eot|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [
			`...`,
			new CssMinimizerPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['jpegtran', { progressive: true }],
							['optipng', { optimizationLevel: 5 }],
							['svgo', { name: 'preset-default' }],
						],
					},
				},
			}),
		],
	},
	performance: {
		// hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   	},
	resolve: {
		extensions: [ '.js', '.scss' ],
	},
    output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
    },
}