// 生成器函数
function * gen() {
    console.log('111');
    yield '一直没有耳朵';
    console.log('222');
    yield '一直在想你';
    console.log('333');
}

// 不会直接执行，需要调用 .next() 方法
function * hello() {
    console.log("hello");
};

hello();   //没有输出
let hello1 = hello();
console.log(hello1);
hello().next();    //有输出

// yield ：分隔符，代码块的分隔符，每一个 yield 上面为一段代码块
let iterator = gen();
console.log(iterator.next());   // 执行第一段代码，并返回的第一段 yield 的结果
console.log(iterator.next());
console.log(iterator.next());

for (let i of gen()) {
    console.log(i);    // 每一次调用返回的是 yield 之后的值
}

// 参数传递
function * fun(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
};
// 执行获取迭代器对象
let it = fun('aaa');   //传入参数
console.log(it.next());
// next 方法可以传入参数
console.log(it.next('bbb'));  //传给 one
console.log(it.next('ccc'));   // 传给 two
console.log(it.next('ddd'));   // 传给 three

// 实例1
function one(){
    setTimeout(() => {
        console.log(111);
        iterator.next();  // 将调用器放在函数内部，实现调用下一个函数
    }, 1000);
}
function two(){
    setTimeout(() => {
        console.log(222);
        iterator.next();
    }, 2000);
}
function three(){
    setTimeout(() => {
        console.log(333);
        iterator.next();
    }, 3000);
}

function * fcc(){
    yield one();
    yield two();
    yield three();
};

iterator = fcc();
iterator.next();   // 走不通