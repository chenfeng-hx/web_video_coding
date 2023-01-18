// 正向断言
let str = 'JS123456你知道吗555啦啦啦';
const reg = /\d+(?=啦)/;
const result = reg.exec(str);
console.log(result);
console.log(result[0]);

// 反向断言
const reg1 = /(?<=么)\d+/;
const result1 = reg.exec(str);
console.log(result1);
console.log(result1[0]);