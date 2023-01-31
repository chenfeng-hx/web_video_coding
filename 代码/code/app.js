import express from "express";
const app = express();

app.all('/promise-ajax', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let data = {
        msg: 'hello world'
    }
    res.send(JSON.stringify(data));
});

app.all('/promise-ajax', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile('../content/茅屋为秋风所破歌.txt');
});

app.listen(3000, function(){
    console.log('服务已启动！')
})