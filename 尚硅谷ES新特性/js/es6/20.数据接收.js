import * as data from "../js/19.数据暴露.js"
console.log(data)


// 此处会报跨域错误，需要下载 vscode 中的 liveserver 插件

// 没有解决

// 解决

// 引入 暴露 出的数据
import * as data from "../js/19.数据暴露.js"
console.log(data)

// 1, 通用方式
import * as m1 from "../js/09.Symbol.js";
// 2. 解构赋值的形式
import { name, abc } from "../js/09.Symbol.js";
import { name as www, xiao } from "../js/19.数据暴露.js";  // 如果出现同名的情况要起别名，不然会报错
import { default as m } from "../js/19.数据暴露.js";  // 获取默认的暴露必须要起别名，不能使用 default
// 3, 简便形式(只针对默认暴露)
import data from "../js/19.数据暴露.js"