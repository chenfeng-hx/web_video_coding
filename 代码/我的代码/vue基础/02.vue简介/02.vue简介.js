persons = {};
// 准备字符串
let htmlstr = ''
// 遍历数据拼接 html 字符串
persons.forEach(p => {
    htmlstr += `<li>${p.id} - ${p.name} - ${p.age}</li>`
});

// 获取 list 元素
let list = document.querySelector('.list');
// 修改内容
list.innerHTML = htmlstr
