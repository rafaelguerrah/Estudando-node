const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname,'../templates'); //acessando a pasta templates


router.get('/add', (req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res)  =>{
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O seu nome é ${name} e sua idade ${age} anos`)

    res.sendFile(`${basePath}/userform.html`) //fim da requisicao
})

//passando
router.get('/:id',(req, res) =>{
    const id = req.params.id
    //leitura da tabela user, resgatar um usuario do banco

    console.log(`Estamos buscando pelo usario ${id}`)

    res.sendFile(`${basePath}/user.html`); // enviado de um arquivo
})

module.exports = router
