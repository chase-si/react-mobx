const path = require('path');

module.exports = {

    /*入口*/
    entry: path.join(__dirname, '../src/index.js'),

    /*输出到dist文件夹，输出文件名字为main.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'main.js'
    },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                use: ['babel-loader?cacheDirectory=true'],
            },
            {
                test: /\.css$/,
                include: /src/,
                use: [ 'style-loader', 'css-loader']
            }

        ]
    },


};