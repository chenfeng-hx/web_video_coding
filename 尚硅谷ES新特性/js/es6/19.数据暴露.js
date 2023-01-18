// 分别暴露
export let school = 'zhongweiyizhong';
export function hello () {
    console.log('hello too');
};

// export school = school;

// 统一暴露
export {
    school,
    hello
}

// 默认暴露
export default {
    home: 'Hello',
    address: 'http'
}

// 在调用 默认暴露的数据时要多写一层
console.log(m3.default.home)
