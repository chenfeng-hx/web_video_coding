// let p = new Promise((resolve, reject) => {
//     resolve();
// });

// let result = p.then(value => {
//     // console.log('yes');
//     // 1. 抛出异常
//     // throw '出了个大error';
//     // 2.返回的结果是 非 Promise 对象
//     // return "i love you";
//     // 3.返回的结果是 promise 对象
//     return new Promise((resolve, reject) => {
//         // resolve('yes');
//         reject('no');
//     });

// }, reason => {

// });
// console.log(result);

// p.then(value => {
//     console.log('me too');
// });

// let file1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('OK');
//     }, 1000);
// });
// file1.then(value => {
//     return new Promise((resolve, reject) => {
//         resolve('success');
//     });
// }).then(value => {
//     console.log(value);   // success
// }).then(value => {
//     console.log(value);   // undefined
// });

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK');
        // reject('not ok');
    }, 1000);
});
p1.then(value => {
    console.log(111);
    return new Promise(() => {});
}).then(value => {
    console.log(222);
}).then(value => {
    console.log(333);
}).catch(reason => {
    console.warn(reason);
});