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
    module: { // 加载器配置
        rules: [ // 规则
            { // 一个具体的规则对象
                test: /\.css$/i, // 匹配以.css为结尾的文件
                use: ["style-loader", "css-loader"], // webpack使用的两个loader加载文件
                // 使用顺序是从右到左，不能颠倒顺序
                // css-loader是用来解析css文件，把css代码一起打包进js文件中
                // style-loader是将css代码插入到DOM中（style标签）
            },
        ],
    },
};