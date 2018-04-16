const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: '../dist',
        compress: true,
        // host: '0.0.0.0',
        hot: true,
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]

});

