// const fs = require('fs');
import * as fs from 'fs';

// 回调函数的 形式
// fs.readFile('./content/茅屋为秋风所破歌.txt', (err, data) => {
//     if (err) console.error('出错啦!' + err.stack);
//     console.log(data.toString());
// });


// Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./content/茅屋为秋风所破歌.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});
p.then(data => {
    console.log(data.toString());
}, err => {
    console.error(err);
});