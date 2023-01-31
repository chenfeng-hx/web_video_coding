let p = new Promise((resolve, reject) => {
    // content
});

p.then(value => {}, reason => {});

p.catch(reason => {});

let p1 = Promise.resolve(512);
let p2 = Promise.resolve(new Promise((resolve, reject) => {
    // reject();
    resolve();
}));

let p3 = Promise.reject(521);
let p4 = Promise.reject(new Promise((resolve, reject) => {
    resolve();
}));

let results = Promise.all([p1, p])