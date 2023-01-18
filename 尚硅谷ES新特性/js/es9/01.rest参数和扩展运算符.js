function connect({host, port, ...user}){
    console.log(host)
    console.log(port)
    console.log(user)
};
connect({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    type: 'master'
});

// 对象合并
const one = {
    q: '1'
}
const two = {
    r: '2'
}
const man = {...one, ...two}
console.log(man)