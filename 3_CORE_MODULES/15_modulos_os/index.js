const os = require('os');

console.log(os.cpus);
// console.log(os.cpus().length); // 8
console.log(os.freemem()); // 16777216000
console.log(os.totalmem()); // 17179869184
console.log(os.homedir()); // C:\Users\andre\OneDrive\Documentos
console.log(os.hostname()); // DESKTOP-6G3F0Q7
console.log(os.platform()); // win32
console.log(os.release()); // 10

console.log(os.type()); // C:\Users\andre\AppData\Local\Temp