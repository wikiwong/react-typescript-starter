const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve('src/index.tsx')
    },
    devtool: 'source-map',
    target: 'web',
    output: {
        path: path.resolve("dist"),
        publicPath: 'http://localhost:9000/',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }, {
                    loader: 'ts-loader'
                }]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve("dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: path.resolve('src/index.html')
        })
    ]
};