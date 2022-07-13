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
            {
                test: /\.less$/i, // 匹配以.less为结尾的文件
                use: ["style-loader", "css-loader", "less-loader"],
            },
            { // 图片文件的配置
                test: /\.(gif|png|jpg|jpeg)$/i,
                type: "asset" // 匹配到上面的文件后webpack会把上述文件以静态资源进行打包
                    // 小于8kb的图片文件，会议base64的格式打包进入js中，
                    // 如果大于8kb，则作为文件导入dist文件夹中
            }
        ],
    },
};