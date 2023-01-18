// 1.object.is
console.log(Object.is(120, 120))  // true
console.log(Object.is(NaN, NaN))  // true
console.log(NaN === NaN)  //false

// 2. boject.assign
const f1 = {
    host: '1',
    t: '2'
}
const f2 = {
    host: '2',
    ttr: '1'
}
console.log(Object.assign(f1, f2))

// 3. Object.setPrototypeOf
const school = {
    xiaoqu: ['beijjing']
}
const home = {name: 'shanghai'}

Object.setPrototypeOf(home, school);
console.log(Object.getPrototypeOf(home))
console.log(home)
