function sendAjax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(response);
                } else {
                    reject(response.status);
                }
            }
        };
    });
};
let btn = document.querySelector('#btn');
btn.addEventListener('click', async function(){
    let content = await sendAjax('http://127.0.0.1:8000/user');
    console.log(content);
});