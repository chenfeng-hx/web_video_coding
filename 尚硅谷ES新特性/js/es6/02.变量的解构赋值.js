// 数组的解构赋值
const name1 = ["xiaohua", "mark"];
let [xiao, shuang] = name1;
console.log(xiao);
console.log(shuang);

// 对象的解构赋值
const zhao = {
    name: "xiao",
    age: 20, 
    hello: function () {
        console.log("Hello");
    }
}
// let {name, age, hello} = zhao;
console.log(name1);
console.log(age);
console.log(hello);

hello();

let {hello} = zhao;
