import fs from 'fs';
import util from 'util';

// 普通的回调函数读文件
try {
    fs.readFile('./content/1.txt', (err, data1) => {
        if (err) throw err;
        fs.readFile('./content/2.txt', (err, data2) => {
            if (err) throw err;
            fs.readFile('./content/3.txt', (err, data3) => {
                if (err) throw err;
                console.log(data1 + data2 +data3);
            });
        });
    });
} catch (error) {
    console.log(error);
}

// async + await 解决回调地狱问题
// 看不到回调函数，就像是同步任务一样，但是内部的执行是异步的
let myReadFile = util.promisify(fs.readFile);  // 将普通函数转化为 Promise 函数
async function readFiles() {
    try {
        let data1 = await myReadFile('./content/1.txt');
        let data2 = await myReadFile('./content/2.txt');
        let data3 = await myReadFile('./content/3.txt');
        console.log(data1+ data2 + data3);
    } catch (error) {
        console.log(error);
    }
};
readFiles();