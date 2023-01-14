const express = require('express');

// 创建web服务器实例
const app = express();


// express路由
// 监听get请求
app.get('/', (req, res) => {
    res.send({name: 'zs', age: 20, gender: '男'});
});

// 监听post请求
app.post('/user', (req, res) => {
    res.send('请求成功！');
});

// 将public文件夹下的内容对外开放
app.use(express.static('public'));

app.get('/user', (req, res) => {
    console.log(req.query);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
});


// 启动监听
app.listen(8080, () => {
    console.log("the server is listening in 127.0.0.1:8080");
});