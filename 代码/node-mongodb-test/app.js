// 导入包
const express = require('express');

// 创建 app 实例
const app = express()

// 设置静态资源
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/index', (req, res) => {
    let name, age, gender;
    console.log(req)
})

// 监听端口
app.listen(3000, ()=> {
    console.log("请访问 http://localhost:3000")
})