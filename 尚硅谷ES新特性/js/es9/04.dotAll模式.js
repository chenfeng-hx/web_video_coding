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
// 声明正则(普通版) \s+ 匹配空格
const reg = /<li>\s+<a>(?<name>.*?)<\/a>\s+<p>(?<time>.*?)<\/p>/;
console.log(reg.exec(str))

// dotall
const reg1 = /<li>.*?<a>(?<name>.*?)<\/a>.*?<p>(?<time>.*?)<\/p>/s;

// 匹配所有的
const reg2 = /<li>.*?<a>(?<name>.*?)<\/a>.*?<p>(?<time>.*?)<\/p>/gs;
let result;
let data = [];
// 当匹配不到结果时返回 null
while(result = reg2.exec(str)){
    data.push({title: result.groups.name, time: result.groups.time});
}
console.log(data)