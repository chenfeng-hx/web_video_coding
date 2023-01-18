// 形参默认值和解构赋值相结合
function connect({host="127.0.0.1", username, password, port}) {
    console.log(host);
    console.log(username);
    console.log(password);
    console.log(port);
};

const connetcion = {
    // host: 'localhost',
    username: 'root',
    password: 'root',
    port: 3306
};

connect(connetcion);