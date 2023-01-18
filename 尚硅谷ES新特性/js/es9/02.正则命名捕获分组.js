// 在不能对捕获到的分组进行命名的时候通过下标得到匹配到的内容

// 声明一个字符串
let str = '<a href="https://www.baidu.com">百度一下</a>';

// 提取 URL 和 标签文本
const reg = /<a href="(.*)">(.*)<\/a>/;

// 执行
const result = reg.exec(str);
console.log(result);
console.log(result[1]);
console.log(result[2]);

let str1 = '<a href="https://www.xioahuahua.com">百度一下</a>';
const reg1 = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result1 = reg1.exec(str1);
console.log(result1);
console.log(result1.groups.url);
console.log(result1.groups.text);