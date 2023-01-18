// 1. 
const school = {
    name: 'xi',
    cities: ['beijing', 'shanghai'],
    xueke: ['math', 'chinese']
}

// 获取所有的键
console.log(Object.keys(school))
// 获取所有的值
console.log(Object.values(school))
// entries
console.log(Object.entries(school))
// map + entries 使用
const m = new Map(Object.entries(school))
console.log(m.get('name'))
console.log(m)

// 对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school));

// 获取到的就是在创建对象时写入的：是否可修改，是否可删除，是否可以枚举
const obj = Object.create(null, {
    name: {
        // 设置 值
        value: 'xxx',
        // 设置属性
        writable: true,
        configurable: true,
        enumerable: true
    }
})