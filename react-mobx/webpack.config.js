const path = require('path');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, './src/index.js'),

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    // devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    },

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                use: ['babel-loader?cacheDirectory=true']
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName:'[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [precss, cssnext]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: /src/img,
                use: ['file-loader']
            }
        ]
    }
};
