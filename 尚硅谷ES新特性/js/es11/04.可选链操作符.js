// 当较深层时不用层层判断
function main(config) {
    // 旧的写法
    const dbHost = config && config.db && config.db.host;
    // 新的写法
    const dbHost1 = config?.db?.host;
    console.log(dbHost)
    console.log(dbHost1)
}
main({
    db: {
        host: '127.0.0.1',
        username: 'root'
    },
    cache: {
        host: 'localhost',
        name: 'xiaohai'
    }
})