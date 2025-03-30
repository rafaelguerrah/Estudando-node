const x  = '10';

//checar se x é um inteiro
if(!Number.isInteger(x)) {
    //se não for, lançar um erro
    throw new Error('x não é um inteiro');
}
console.log("continuado o codigo...")