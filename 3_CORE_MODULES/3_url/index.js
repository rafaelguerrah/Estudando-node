const url = require('url');
const address = 'http://www.meusite.com.br:8000/arquivo.html?usuario=rafael&senha=123456#ancora';
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.protocol); // http:
console.log(parsedUrl.hostname); // www.meusite.com.br      
console.log(parsedUrl.port); // 8000
console.log(parsedUrl.pathname); // /arquivo.html