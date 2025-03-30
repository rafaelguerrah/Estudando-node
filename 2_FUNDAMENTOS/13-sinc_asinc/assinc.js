const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo.txt', 'oi', function (err) {
    if (err) {
        console.error('Erro ao criar arquivo:', err);
        return;
    }

    setTimeout(function () {
        console.log('arquivo criado');
    }, 1000);
});

console.log('fim');