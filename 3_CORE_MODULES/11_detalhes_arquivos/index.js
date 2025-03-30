const fs = require('fs');

fs.stat('novoarquivo.txt', (err, stats) => {
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile()) // true
    console.log(stats.isDirectory()) // false
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
     // 0
    console.log(stats.atime) // 2023-10-04T17:14:29.000Z
    console.log(stats.mtime) // 2023-10-04T17:14:29.000Z
})