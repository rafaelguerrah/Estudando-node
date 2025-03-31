const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');

// Exibir formulário de usuário
router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

// Salvar usuário
router.post('/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome é ${name} e a idade é ${age}`);
    res.sendFile(`${basePath}/userform.html`);
});

// Rota dinâmica para buscar usuário
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Buscando usuário com ID: ${id}`);
    res.sendFile(`${basePath}/user.html`);
});

module.exports = router;