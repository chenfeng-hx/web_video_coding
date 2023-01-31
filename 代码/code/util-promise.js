// 引入 util、fs模块
import fs from 'fs';
import util from 'util';

// 返回一个 新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./content/茅屋为秋风所破歌.txt').then(data => {
    console.log(data.toString());
});