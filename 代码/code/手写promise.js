function Promise(executor) {
    // 添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    // 保存实例对象的 this 的值
    const _this = this;
    // resolve 函数
    function resolve(data) {
        // 判断状态
        if (_this.PromiseState !== 'Pending') return;  // 保证每个 promise 对象的状态只能够改变一次
        // 修改对象的状态
        _this.PromiseState = 'fulfilled';
        // 修改对象的值
        _this.PromiseResult = data;
        // 异步任务下执行回调函数，应该是在状态改变后执行回调函数
        // if (_this.callback.onResolved) {
        //     _this.callback.onResolved(data);
        // }
        // 修改：因为是异步执行，所以不能在状态改变后直接执行回调函数
        setTimeout(() => {
            _this.callbacks.forEach(item => {
                item.onResolved(data);
            });
        });
    };
    // reject 函数
    function reject(data) {
        if (_this.PromiseState !== 'Pending') return;  // 保证每个 promise 对象的状态只能够改变一次
        // 修改对象的状态
        _this.PromiseState = 'fulfilled';
        // 修改对象的值
        _this.PromiseResult = data;
        // 异步任务下执行回调函数，应该是在状态改变后执行回调函数
        // if (_this.callback.onRejected) {
        //     _this.callback.onRejected(data);
        // }
        setTimeout(() => {
            _this.callbacks.forEach(item => {
                item.onRejected(data);
            });
        });
    };
};

// 添加 then 方法
// 修改：then 方法应该是异步执行的，在所有的同步任务执行结束后才执行异步任务
// 修改：在外部使用一个定时器包裹即可
Promise.prototype.then = function (onResolved, onRejected) {
    // 判断回调函数参数，当第二个（失败的回调）不写时默认为 undefined，这样在上面进行失败回调遍历时会报错
    // 为其设置一个默认值，这样可以在 “异常处理”最后处理错误时保证不报错并且有失败的回调可用
    if (typeof onRejected !== 'function') {
        throw reason;
    }
    //在第一个参数也不传递的时候可以保持值传递
    if (typeof onResolved !== 'function') {
        onResolved = value => value;
        // 等价于  value => { return value };
    }

    // 设置 then 方法的返回值
    return new Promise((resolve, reject) => {
        // 使用 try-catch 处理抛出错误的情况
        try {
            // 调用回调函数  PromiseState
            if (this.PromiseState === 'fulfilled') {   // 此时 this 的值指向实例对象
                setTimeout(() => {
                    let result = onResolved(this.PromiseResult);  // 将 promise 的值返回给回调函数，
                    // 判断
                    if (result instanceof Promise) {
                        // 如果 result 是原型链上的一部分，即：result（返回的结果是一个 Promise 对象）,调用 then 方法返回的
                        // 是 Promise 对象，就可以调用 then 方法
                        result.then(value => {
                            resolve(value);
                        }, reason => {
                            reject(reason);
                        });
                    } else {
                        // 返回的结果不是一个 Promise 对象，结果的对象状态为 成功
                        resolve(result);
                    }
                });
            };
        } catch (error) {
            reject(error);
        };
        try {
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    let result = onRejected(this.PromiseResult);  // 将 promise 的值返回给回调函数，
                    // 判断
                    if (result instanceof Promise) {
                        // 如果 result 是原型链上的一部分，即：result（返回的结果是一个 Promise 对象）,调用 then 方法返回的
                        // 是 Promise 对象，就可以调用 then 方法
                        result.then(value => {
                            resolve(value);
                        }, reason => {
                            reject(reason);
                        });
                    } else {
                        // 返回的结果不是一个 Promise 对象，结果的对象状态为 成功
                        resolve(result);
                    }
                });
            };
        } catch (error) {
            reject(error);
        }
        // 异步任务下，此时 promise 实例对象的状态位 pending，所以应该先将回调函数保存下来，等到状态改变后再执行
        // 但是在多个 then 方法的情况下，容易出现覆盖问题,所以使用数组将所有的 回调都保存下来，然后进行遍历
        if (this.PromiseState === 'pending') {
            const _this = this;
            // this.prototype.callbacks = {
            //     onResolved,
            //     onRejected
            // }
            this.callbacks.push({
                // onResolved,
                // onRejected
                // 在此处应该对回调函数修改，使其调用 resolve 或 reject 进行改变状态
                onResolved: function () {
                    try {
                        // 执行成功回调函数，并获得执行结果并进行状态改变
                        let result = onResolved(_this.PromiseResult);
                        // 判断
                        if (result instanceof Promise) {
                            result.then(value => {
                                resolve(value);
                            }, reason => { reason });
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: function () {
                    try {
                        let result = onRejected(_this.PromiseResult);
                        // 判断
                        if (result instanceof Promise) {
                            result.then(value => {
                                resolve(value);
                            }, reason => { reason });
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        };
    });
};

// 添加 catch 方法
Promise.prototype.catch = function (onRejected) {
    return Promise.then(undefined, onRejected);
};

// 封装 resolve 方法，该方法是 Promise 对象的方法，不是实例对象的方法
Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(value => {
                resolve(value);
            }, reason => {
                reject(value);
            });
        } else {
            resolve(value);
        }
    });
};

// 封装 reject 方法，该方法和 resolve 不同的是 返回的结果状态永远是 失败的
Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
};

// 封装 all 方法
Promise.all = function (promises) {
    // 返回结果是一个 Promise 对象
    return new Promise((resolve, reject) => {
        // 声明变量
        let count = 0;
        let arr = [];
        // 遍历
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(value => {
                // 得知该 Promise 对象的状态为成功地
                // 每个 Promise 对象 都成功
                count++;
                // arr.push(value);    //可以使用，但是因为all中数组可能存在 异步任务，所以数值放入的顺序可能会不同
                arr[i] = value;
                // 判断
                if (count === promises.length) {
                    // 修改状态
                    resolve(arr);
                }
            }, reason => {
                reject(reason);
            });
        }
    });
};

// 添加 race 方法 
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(value => {
                // 谁先结束谁调用
                resolve(value);
            }, reason => {
                reject(reason);
            });
        }
    });
};