// ES5 
function date() {
    console.log(arguments);
}
date('1', 2);

// ES6
function date1(...args) {
    console.log(args)
}
date1(1, 2, 3);

// args参数放最后
function n(a, b, ...args) {
    console.log(a)
    console.log(b)
    console.log(args)
}
n(1, 2, 3, 4);    // args  输出了 3、4