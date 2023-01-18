// 1. 声明
let fun = function () {};
let fun1 = () => {};

// 2. this 的指向
function get() {
    console.log(this.name);
};

let get2 = () => {
    console.log(this.name);
};

window.name = "xiaohua";

// 直接调用
get();
get2();

const shc = {name: "yes"};

// call 方法调用(调用函数并改变this的指向)
get.call(shc);
get2.call(shc);

// 3. 箭头函数不能作为构造实例化对象(报错)
// let Person = (name, age) => {
//     this.name = name;
//     this.age = age;
// };

// 4. 箭头函数不能使用 arguments 变量(报错)
let fn = () => {
    console.log(arguments);
};
fn(1, 2, 3);

// 5. 省略小括号
let fnn = data => {
    console.log(data);
    console.log(data);
    return;
};

// 省略花括号
let fuu = (err, result) => console.err(err.stack);