// 使用

// for of 打印出的是键值
const names = ["xiao", "zhao", "laing"];
for(let i of names){
    console.log(i);
}

// for in 打印的是键名
for(let i in names){
    console.log(i);
}

// 工作原理
let iterator = names[Symbol.iterator]();  // 是一个方法
console.log(iterator.next())   // 会调用里面的 next 方法，指向第一个，并在调用后指向下一个
console.log(iterator.next())   // 会调用里面的 next 方法，指向第一个，并在调用后指向下一个
console.log(iterator.next())   // 会调用里面的 next 方法，指向第一个，并在调用后指向下一个
console.log(iterator.next())   // 最后一个指向的完成后 done 会变成 true，但是指向的是 undefined


// 实践：如何遍历对象中的某个属性中的内容，能不能遍历需要经过对象的同一，而不能直接去拿对象中的属性进行 foreach
// 面向对象编程思想
// 声明一个对象
const banji = {
    name: 'yiban',
    stus: [
        'xiaoming',
        'xiaohua',
        'lisi'
    ],
    [Symbol.iterator]() {
        // 索引变量
        let index = 0;
        // 保存当前this指向的对象
        let _this = this;
        return{
            next: function() {
                if (index < _this.stus.length) {
                    const result = {value: _this.stus[index], done: false};
                    // 下标自增
                    index++;
                    // 返回结果
                    return result;
                } else {
                    const result = {value: undefined, done: true};
                    return result;
                }
            }
        }
    }
}
for (let i of banji) {
    if (i !== undefined) {
        console.log(i);
    }
}
