const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js', // 入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口路径文件夹的名字
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ // plugin插件配置
        template: './public/index.html' // 告诉webpack使用插件时，以我们自己的html文件作为模板生成dist/html文件
    })],
};