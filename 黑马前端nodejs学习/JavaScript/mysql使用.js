// 导入mysql 模块
const mysql = require('mysql');

// 创建mysql连接字段
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hxxhzhn625',
    database: 'useme'
});
// 创建mysql连接
connection.connect((err) => {
    if (err) return console.error('error connecting: ' + err.stack);
    console.log('connecting!')
});

// 测试mysql模块能否正常工作
connection.query('select 1', (err, results) => {
    if (err) return console.error('error query!' + err.stack);
    console.log(results);
});



// 断开mysql连接
connection.end((err) => {
    if (err) return console.error('close error: ' + err.stack);
    console.log('close success!')
});