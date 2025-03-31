//modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";

operation();

function operation() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
            "Criar conta",
            "Consultar saldo",
            "Depositar",
            "Sacar",
            "Sair"
        ]
    }])
    .then((answer) => {
        const action = answer['action'];
        if (action === "Criar conta") {
            createAccount();
        }else if(action === "Depositar"){
            depositar();
        }else if(action === "Consultar saldo"){

        }else if(action === "Sacar"){

        }else if(action === "Sair"){
            console.log(chalk.bgBlue.black("Obrigado por usar o nosso banco!"));
            process.exit();
        }

    })
    .catch(err => console.log(err));
}

function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir: "));
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?",
        },
    ]).then(answer => {
        const accountName = answer['accountName'];
        
        // Verifica e cria o diretório se não existir
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts');
        }

        const filePath = `accounts/${accountName}.json`;
        
        if (fs.existsSync(filePath)) {
            console.log(chalk.bgRed.black("Esta conta já existe!"));
            buildAccount();
            return;
        }

        fs.writeFileSync(filePath, '{"balance": 0}');
        console.log(chalk.green("Parabéns, sua conta foi criada com sucesso!"));
        operation();
    }).catch(err => console.log(err));
}


//depositar

function depositar() {
    inquirer.prompt([
        {
            name: "accountName",
            message: "Qual o nome da sua conta?",
        },
        {
            name: "value",
            message: "Qual o valor que deseja depositar?",
        },
    ]).then((answer) =>  {

       //verificar se a conta existe 
        if(!checkAccount(answer['accountName'])) {
            depositar();
            return;
        }
    
    })
    .catch(err => console.log(err));
}

    function checkAccount(accountName) {
        if(!fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black("Esta conta não existe!"));
            return false;
        }
        return true;
    }

        