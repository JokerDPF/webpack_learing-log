// 1.yarn add jquery
// 2.public > index.html > 10个小li
// 3.入口导入jquery
import $ from 'jquery'
// 4.编写隔行变色的代码
$('#myUL>li:odd').css('color', 'red')
$('#myUL>li:even').css('color', 'green')

// 5.引入css文件
import './css/index.css';

// 6.引入less文件
import './less/index.less'

// 7.手动引入一个图片
// webpack眼里万物皆模块
import imgObj from "./asset/1.gif"
let theImg = document.createElement("img")
theImg.src = imgObj
document.body.appendChild(theImg)