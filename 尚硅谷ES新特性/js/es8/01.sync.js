// 声明
async function fun() {};

// 返回值不是一个 promise 对象
async function fun1() {
    // 正常返回
    return 'http';
    // 抛出错误
    throw new Error('error');
};
// 返回值是一个 promise 对象
async function fun2() {
    return new Promise((resolve, reject) => {
        return resolve('http');
        return reject('success');
    });
}

let abc = fun1();
console.log(abc) 


// await
const p = new Promise((resolve, reject) => {
    reject('failed')
    resolve('data')
});

async function fun3() {
    try {
        let result = await p;
        console.log(result);
    } catch (error) {
        console.log(error); 
    }
}

fun3();

// 使用 async 和 await 读取文件
// const fs = inquire('fs');
import fs from 'fs';
function read() {
    return new Promise((resolve, reject) => {
        fs.readFile('xxx', (err, data) => {
            if (err) reject('failed')
            resolve(data)
        })
    })
};

async function fun4() {
    let data = await read();
    console.log(data.toString())
}

fun4();
