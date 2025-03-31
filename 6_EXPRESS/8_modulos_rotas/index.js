const express = require('express');
const app = express();
const port = 3000; //varialvel de ambiente

const path = require('path');

const userRouts = require('./users')

//ler o body
app.use(
    express.urlencoded({
        extended:true
    }),
)
app.use(express.json())

const basePath = path.join(__dirname,'/templates'); //acessando a pasta templates

app.use('/users', userRouts)

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
