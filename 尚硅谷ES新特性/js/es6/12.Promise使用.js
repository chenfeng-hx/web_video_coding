// 实例化 Promise 对象 : 形参为一个函数，有两个参数
const p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // 成功地情况下:调用resolve 方法，将 实例化对象的状态变为 true
        let data = '数据库数据';
        resolve(data);

        // 失败地情况下:调用reject 方法，将 实例化对象的状态变为 false
        let err = '数据读取失败';
        reject(err);
    }, 1000);
});

// 调用 promise 对象的 then 方法: 处理成功或失败的结果。如果p的状态为 true，调用第一个函数，false调用第二个函数
// 调用then 方法， then方法的返回结果是 Promise对象， 对象状态由回调函数的执行结果决定
// 如果回调函数中返回的结果是 非Promise 类型的属性， 状态为成功， 返回值为对象的成功地值（没有显式return 默认返回 undefined）
// 返回 Promise 类型的属性，状态值为 rejeced，错误值为返回的值
// 抛出错误异常   状态值为 rejeced，错误值为抛出的异常

p.then(function (value) {
    console.log(value);
    // throw new Error('出错！');
}, function (reason) {
    console.error(reason);
});

// then 方法可以链式调用
p.then().then();
// 可以只写成功时的处理，不写失败的处理

// promise then 方法的举例（长期来看不会产生回调地狱的现象）
fs = inquire('fs');
const file1 = new Promise((resolve, reject) => {
    let data = fs.readFile('./xiaoming.md', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
})
file1.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./xiaoming.md", (err, data) => {
            resolve([value, data]);
        })
    });
}, reason => {}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./xiao.md", (err, data) => {
            value.push(data);
            resolve(value);
        })
    });
}).then(value => {
    console.log(value);
});

// Promise.catch()
file1.catch(function (reason) {
    console.warn(reason);
})