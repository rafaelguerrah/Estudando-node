const express = require('express');
const exphbs = require('express-handlebars');  // Nome correto do pacote
const mysql = require('mysql2');  // Ou 'mysql2' se você instalou

const app = express();

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Rota de exemplo
app.get('/', (req, res) => {
    res.render('home');
});

// Conexão com o MySQL (substitua pelas suas credenciais)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao banco de dados MySQL!');
        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
        });
    }
});