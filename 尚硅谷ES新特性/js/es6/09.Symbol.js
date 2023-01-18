// 创建 Symbol
let s = Symbol();

let a = Symbol('xiaohua');   // 'xiaohua'字符串相当于一个标识
let b = Symbol('xiaohua');   // 虽然标识相同，但是得到的内容却不同
console.log(a === b);    // false

// 使用 Symbol.for 创建
let t = Symbol.for('yes');
let w = Symbol.for('yes');    // 得到的是相同的结果
console.log(t === w);   // true

// 不能与其他数据运算
// let result = s + 100;
// let result1 = s > 100;
// let result2 = s + s;

// 为想添加方法（两种）
// 1
const o1 = {};
let o2 = {
    up: Symbol(),
    down: Symbol()
}
// 看run code 结果
o1[o2.up] = function() {console.log(('yes'))};
o1[o2.down] = function() {console.log(('no'))};

console.log(o1);
console.log(o2);

// 2
const o3 = {
    [Symbol('say')]: function() {
        console.log("yes");
    },
    [Symbol('say1')]: function() {
        console.log('no');
    }
}
console.log(o3);


// 内置值
// 1
class Person{
    static [Symbol.hasInstance](param) {
        console.log(param);  // 会把传来的需要被检测的变量存入 param中
        console.log("我被用来检测类型了");
        return true;    // 自己可以定义返回值为真或为假
    }
}

let o = {};
console.log(o instanceof Person);

// 2
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
arr2[Symbol.isConcatSpreadable] = false;   // arr2 不会被展开，作为一个整体
let arr = arr1.concat(arr2);
console.log(arr);
