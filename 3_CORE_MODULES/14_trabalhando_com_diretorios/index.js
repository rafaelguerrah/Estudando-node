const fs = require('fs')

if(!fs.existsSync('./relatorios')){
    console.log('Diretório não existe')
}

fs.mkdirSync('relatorios');

if(fs.existsSync('./relatorios')){
    console.log('Diretório existe')
}
    