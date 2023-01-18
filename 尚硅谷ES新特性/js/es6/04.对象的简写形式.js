
let name1 = "xiaohua";
let fun = function () {
    console.log("你好！");
};

const pp = {
    name1,
    fun,
    hello: function () {
        console.log("Hello");
    },
    hello1(){
        console.log(name1);
    }
}
console.log("pp.name1:" + pp.name1);
console.log("pp.fun(): ");
console.log(pp.fun());
console.log("pp.hello(): ");
console.log(pp.hello());
console.log("pp.hello1(): ");
console.log(pp.hello1());