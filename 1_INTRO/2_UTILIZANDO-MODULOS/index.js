//import

const fs = require('fs') // file system

fs.readFile('1_INTRO/2_UTILIZANDO-MODULOS/arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});