const express = require('express');
const app = express();
const port = 3000; //varialvel de ambiente

const path = require('path');
const basePath = path.join(__dirname,'templats'); //acessando a pasta templates


//passando
app.get('/user/:id',(req, res) =>{
    const id = req.params.id
    //leitura da tabela user, resgatar um usuario do banco

    console.log(`Estamos buscando pelo usario ${id}`)

    res.sendFile(`${basePath}/user.html`); // enviado de um arquivo
})


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


