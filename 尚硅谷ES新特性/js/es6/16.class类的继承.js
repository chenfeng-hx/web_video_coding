// ES5 构造函数继承
// 手机
function Phone(brand, price) {
    this.brand = brand;
    this.price = price;
}

// Phone.proptype.call = function () {
//     console.log('我可以打电话');
// }

// 智能手机
function smartPhone(brand, price, color, size) {
    Phone.call(this, brand, price);
    this.color = color;
    this.size = size;
}

// 设置子级构造函数的原型
smartPhone.prototype = new Phone;
smartPhone.prototype.constructor = smartPhone;

// 声明子类的方法
smartPhone.prototype.photo = function () {
    console.log('我可以拍照');
}
smartPhone.prototype.playGame = function () {
    console.log('我可以玩游戏');
}

const chuzi = new smartPhone('chuzi', 2400, 'blank', '5.5');
console.log(chuzi);

// ES6 继承
class car{
    // 构造方法
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    call(){
        console.log('didi');
        return;
    }
}
    // 继承父类 extends
class baobaocar extends car {
    // 构造方法  super 继承
    constructor (name, color, price) {
        super(name, color);
        this.price = price;
    }
    run(){
        console.log('running');
        return;
    }
}

let bb = new baobaocar('baoma', '333', 120000);
console.log(bb);
console.log(bb.call());
console.log(bb.run());

// get 和 set 的使用
class home{
    get price(){
        console.log('读取');
        return '1';    // 返回的结果就是该属性的值
    }

    set price(newVla){
        console.log('修改');
    }
}

let s = new home();

console.log(s.price);

s.price = 'free';