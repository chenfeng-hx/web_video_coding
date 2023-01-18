// 声明
let s = new Set();
// 接收一个可迭代对象
let s1 = new Set(['1', '2']);

// 元素个数
console.log(s1.size);
// 添加新的元素
s1.add('3');
console.log(s1);
// 删除元素
s1.delete('1');
console.log(s1);
// 检测
console.log(s1.has('1'));
// 清空
// s1.clear();
console.log(s1);

// 遍历数据类型
for(let v of s1) {
    console.log(v);
}

// 数组去重
const num = [1, 1, 2, 3, 4, 2];
const num1 = [...new Set(num)];
console.log(num1);

// 交集
let arr = [1, 2, 3, 4,  5];
let result = [...new Set(num)].filter(item => {
    let s = new Set(arr);
    if(s.has(item)) {
        return true;
    } else {
        return false;
    }
});
// 简写形式
let result1 = [...new Set(num)].filter(item => new Set(arr).has(item));
console.log(result1);

// 并集
let union = [...new Set([...arr, ...num])];
console.log(union);

// 差集
let diff = [...new Set(arr)].filter(item => !(new Set(num).has(item)));
console.log(diff);