const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual a sua linguagem favorita? ', (language) => {
    // Exibe a linguagem favorita do usuário
    if(language === 'JavaScript') {
        console.log('Você é um verdadeiro dev!');
    }
    else if(language === 'Python') {
        console.log('Você é um verdadeiro cientista de dados!');
    }
    else if(language === 'Java') {
        console.log('Você é um verdadeiro desenvolvedor de aplicativos!');
    }
    else if(language === 'C#') {
        console.log('Você é um verdadeiro desenvolvedor de jogos!');
    }
    else {
        console.log('Você é um verdadeiro desenvolvedor!');
    }
    console.log(`A sua linguagem favorita é ${language}`);
    readline.close();

 
})