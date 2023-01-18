class Person{
    // 公有属性
    names;
    // 私有属性
    #age;
    #weight;
    // 构造方法
    constructor(name1, age, weight) {
        this.name1 = name1;
        this.#age = age;
        this.#weight = weight;
    }

    getAge(){
        console.log(this.#age);
    }
}
const girl = new Person('xioahua', 19, '100');
// console.log(girl.#age);  //属性 "#age" 在类 "Person" 外部不可访问，因为它具有专用标识符。
girl.getAge();