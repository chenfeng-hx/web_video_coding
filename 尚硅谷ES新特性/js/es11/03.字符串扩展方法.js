let str = `
        <ul>
            <li>
                <a>肖生克的救赎</a>
                <p>上映日期：2020-04-04</p>
            </li>
            <li>
                <a>熊出没</a>
                <p>上映日期：2022-07-08</p>
            </li>
        </ul>
`;
// 声明正则
const reg = /<li>.*?<a>(?<name>.*?)<\/a>.*?<p>(?<time>.*?)<\/p>/gs;
const result = str.matchAll(reg);

// 有 next（） 函数，可迭代对象，通过 for of 遍历
for (let i of result) {
    console.log(i);
}

// 可通过扩展运算符得到一个数组
const arr = [...result];
console.log(arr);