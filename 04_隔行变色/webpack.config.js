const path = require('path');

module.exports = {
    entry: './src/main.js', // 入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 出口路径文件夹的名字
        filename: 'bundle.js',
    },
};