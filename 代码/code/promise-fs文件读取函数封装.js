import fs from 'fs';

function myreadfile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

myreadfile('./content/茅屋为秋风所破歌.txt').then(data => {
    console.log(data.toString());
}, err => {
    console.log(err);
});