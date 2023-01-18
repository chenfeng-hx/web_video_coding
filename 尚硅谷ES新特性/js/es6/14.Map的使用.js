// 创建一个空 map
let m = new Map();

// 添加元素
m.set('name', 'xiaohua');
m.set('change', function(){console.log(this)});
m.set('arr', [1, 2, 3]);

// size
console.log(m.size);

// 删除
// m.delete('arr');

// 获取
console.log(m.get('name'));

// 遍历（每一个元素都是一个数组【键，值】）
for (let i of m) {
    console.log(i);
};

console.log(m)

// 清空
m.clear();
console.log(m)