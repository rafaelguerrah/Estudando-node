import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual é o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual é a sua idade?',
    }
])
.then((answers) => {
    console.log(chalk.blue('Informações coletadas com sucesso!'));
    console.log(chalk.bgGreen.black('Dados do usuário:'));
    
    console.log(chalk.bgYellow.black(`Nome: ${answers.nome}`));
    console.log(chalk.bgYellow.black(`Idade: ${answers.idade}`));
})
.catch((err) => {
    console.error(chalk.red('Erro ao coletar as informações:'), err);
});