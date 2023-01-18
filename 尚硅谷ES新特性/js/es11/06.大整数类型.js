// BigInt
// 声明
let n = 54n;
console.log(typeof(n))

// 转化
let s = 123;
console.log(BigInt(s))

// 大数值运算
let max = Number.MAX_SAFE_INTEGER;
console.log(max)
console.log(max + 1)
console.log(max + 2)

console.log(BigInt(max))
console.log(BigInt(max) + BigInt(1))
console.log(BigInt(max) + BigInt(2))

