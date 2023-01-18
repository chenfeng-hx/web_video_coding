// Object.fromEntries
// 创建一个对象，接受一个数组或者 一个 Map
// 二维数组
const result = Object.fromEntries([
    ['name', '尚硅谷'],
    ['school', 'abc']
])
console.log(result)

// Map
const m = new Map();
m.set('name', 'xiaoha');
const y = Object.fromEntries(m);
console.log(y)