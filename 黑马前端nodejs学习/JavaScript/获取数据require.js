const userData = require('./获取数据');
const mysql = require('mysql');
// console.log(userData);
console.log(userData)


connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hxxhzhn625",
    database: "useme",
});

connection.connect((err) => {
    if (err) {
        console.error("error!" + err.stack);
        return;
    }
    console.log('success');
});

let sql = `select password from user where id = ${userData.username};`
connection.query(sql, (err, res) => {
    if (err) return console.error("select error!" + err.stack);
    console.log(res);
});



connection.end((err) => {
    if (err) {
        console.error("close error!" + err.stack);
        return;
    };
    console.log('close success!')
});
