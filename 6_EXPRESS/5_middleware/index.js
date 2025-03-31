const express = require('express');
const app = express();
const port = 3000; //varialvel de ambiente

const path = require('path');
const basePath = path.join(__dirname,'templats'); //acessando a pasta templates

//middleware

const checkAuth = function (req, res, next){
    req.checkAuth =  true;

    if(req.checkAuth){
        console.log("Voçê esta logado, pode continuar");
        next();
    }else{
        console.log("Não esta logado, faca o ligon para continuar")// direcionar uma pagina
        next() // proceguir
    }
}

app.use(checkAuth);

//criando rota
app.get('/',(req, res) =>{
    res.sendFile(`${basePath}/index.html`); // enviado de um arquivo
})

//req : é o que recebe do usuario;
// res: é o que agente envia

app.listen(port, () =>{
    console.log(`App rodando na porta: ${port}`)
    // msg para quem esta execultando o servidor
})
