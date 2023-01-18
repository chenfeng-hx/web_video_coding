// [ ... ]
const tf = ['1111', '11', '111'];

function change() {
    console.log(arguments);
};

change(tf);      // '0': [ '1111', '11', '111' ]  一个对象
change(...tf);   // '0': '1111', '1': '11', '2': '111'  三个对象

// 数组的合并
const n1 = ['1', '2'];
const n2 = ['3', '4'];
const n = [...n1, ...n2];
console.log(n);

// 数组的克隆
const n3 = [...n1];
console.log(n3);

// 将伪数组转换为真正的数组
const div = document.querySelector('div');
const divArr = [...div];
console.log(div);