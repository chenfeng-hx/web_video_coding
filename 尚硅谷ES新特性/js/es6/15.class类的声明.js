// ES5 构造函数
function Phone (brand, price) {
    this.brand = brand;
    this.price = price;
};

// 添加方法
Phone.prototype.call = function(){
    console.log("我可以打电话!");
};

// 实例化对象
let hw = new Phone('华为', 5555);
hw.call();
console.log(hw);

// ES 6 => class
class shouji {
    // 构造方法，名字不能修改，在使用 new 实例化对象的时候使用 开始执行
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }

    // 增加方法 只能使用下面的语言方法，不能使用 ES5中的对象完整形式 call: function(){}
    call(){
        console.log('yes');
    }
}
let one = new shouji('yijia', 3000);
one.call()
console.log(one)

// 函数中的静态成员：属于函数对象，但不属于实例化对象
function abc(){};
abc.name = 'xiao';   //静态成员，实例对象无法访问
abc.change = function(){};   //静态成员

abc.prototype.update = function(){};   //实例化对象可以访问
let bushi = new abc();
console.log(bushi.name);   //undefined
// console.log(bushi.change());   // error
console.log(bushi.update);  // [Function (anonymous)]

// ES6 class 中的静态成员
class Phone1 {
    // static 声明静态属性
    static name = '手机';
    static no(){
        console.log('hello');
    };
}
let omygao = new Phone1();
console.log(omygao.name);   // undefined
console.log(Phone1.name);


