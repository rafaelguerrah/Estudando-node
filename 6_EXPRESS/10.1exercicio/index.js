const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/users');
const port = 3000;

// Ler body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const basePath = path.join(__dirname, 'templates');

// Rotas
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});