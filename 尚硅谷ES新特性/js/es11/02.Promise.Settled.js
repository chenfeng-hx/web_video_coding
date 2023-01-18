const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('商品数据 -1')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('商品数据 -2')
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('出错率')
    }, 1000);
})
const p = Promise.allSettled([p1, p2, p3])
console.log(p)
const x = Promise.all([p1, p2, p3])
console.log(x)