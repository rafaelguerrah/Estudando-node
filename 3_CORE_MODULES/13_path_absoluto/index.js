const path = require('path');
//path absoluto
console.log(path.resolve('C:/Users/andre/OneDrive/Documentos')); // C:\Users\andre\OneDrive\Documentos

//formar caminho
const midFolder = 'relatorios';
const fileName = 'relatorio1.txt';

const finalPath = path.join('/','arquivos', midFolder, fileName);

console.log(finalPath); // \arquivos\relatorios\relatorio1.txt