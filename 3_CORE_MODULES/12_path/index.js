const path = require('path');

const customPath = 'C:/Users/andre/OneDrive/Documentos';

console.log(path.dirname(customPath)); // C:\Users\andre\OneDrive\Documentos
console.log(path.basename(customPath)); // Documentos               
console.log(path.extname(customPath)); // ''
console.log(path.isAbsolute(customPath)); // true