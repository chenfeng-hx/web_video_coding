//构造函数
function Axios(config) {
    //初始化
    this.defaults = config;//为了创建 default 默认属性
    this.intercepters = {
        request: {},
        response: {}
    }
}
//原型添加相关的方法
Axios.prototype.request = function (config) {
    console.log('发送 AJAX 请求 请求的类型为 ' + config.method);
}
Axios.prototype.get = function (config) {
    return this.request({ method: 'GET' });
}
Axios.prototype.post = function (config) {
    return this.request({ method: 'POST' });
}

//声明函数
function createInstance(config) {
    //实例化一个对象
    let context = new Axios(config);// context.get()  context.post()  但是不能当做函数使用 context() X
    //创建请求函数
    let instance = Axios.prototype.request.bind(context);// instance 是一个函数 并且可以 instance({})  此时 instance 不能 instance.get X
    //将 Axios.prototype 对象中的方法添加到instance函数对象中
    Object.keys(Axios.prototype).forEach(key => {
        // 使用 bind 方法绑定，此时 this 的执行始终是指向 content 实例对象的，不加也是指向的，但是更加严谨一些
        instance[key] = Axios.prototype[key].bind(context);// this.default  this.interceptors
    });
    //为 instance 函数对象添加属性 default 与 interceptors
    Object.keys(context).forEach(key => {
        instance[key] = context[key];
    });
    return instance;
}

let axios = createInstance();
//发送请求
// axios({method:'POST'});
axios.get({});
axios.post({});
