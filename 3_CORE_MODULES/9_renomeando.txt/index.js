const fs = require('fs');

const arquivo = 'arquivo.txt';
const arquivoRenomeado = 'arquivo_renomeado.txt';

fs.rename(arquivo, arquivoRenomeado, function (err) {
    if (err) {
        console.error('Erro ao renomear arquivo:', err);
        return;
    }
    console.log(`Arquivo renomeado de ${arquivo} para ${arquivoRenomeado}`);
})