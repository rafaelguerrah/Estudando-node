const chalk = require('chalk');
const nota = 7.5;

if(nota >= 7) {
    console.log(chalk.green('Aprovado!'));
}
else if(nota >= 5) {
    console.log(chalk.yellow('Recuperação!'));
}
else {
    console.log(chalk.red('Reprovado!'));
}