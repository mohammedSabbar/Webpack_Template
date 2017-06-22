const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const extractHtml = new htmlWebpackPlugin({
	title: 'Image Manager',
	minify:{
		collapseWhitespace: true
	},
	hash: true,
	template: './src/index.html' // Load a custom template (ejs by default see the FAQ for details)
});

module.exports={
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        watchContentBase: true,
        open: true,
        port: 9000
    },
    devtool: "source-map",
    entry: './src/ts/app.ts',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css']
    },
    module:{
        rules: 
        [{   
            test: /\.scss$/, 
            use: extractSass.extract({
                use:
                    [{
                        loader: "css-loader", // translates SASS into Common CSS
                        options: {sourceMap: true }
                    }, {
                        loader: "sass-loader"
                    }],
                fallback: "style-loader"
                })
        },{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    plugins: [ extractHtml, extractSass ]
}