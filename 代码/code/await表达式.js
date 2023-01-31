async function text() {
    let p1 = new Promise((resolve, reject) => {
        resolve('ok');
    });
    let p2 = new Promise((resolve, reject) => {
        reject('no');
    });
    let p3 = new Promise((resolve, reject) => {
        throw 'error';
    });
    let result1 = await p1;
    console.log(result1);
    let result2 = await p2;
    console.log(result2);
    try {
        let result3 = await p3;
    } catch (e) {
        console.log(e)
    }
};