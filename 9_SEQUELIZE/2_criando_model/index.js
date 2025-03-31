// Importando os módulos necessários
const express = require('express'); // Framework para criar o servidor web
const exphbs = require('express-handlebars'); // Template engine para renderizar HTML dinâmico
//const mysql = require('mysql2'); // Biblioteca para conectar ao banco de dados MySQL
const conn = require('./bd/conection')

const User = require('./models/User')


// Inicializando o aplicativo Express
const app = express();

// Configuração do Express para interpretar dados do corpo da requisição
app.use(
    express.urlencoded({
        extended: true // Permite analisar objetos complexos no corpo da requisição
    })
);
app.use(express.json()); // Permite trabalhar com JSON no corpo da requisição

// Configuração do Handlebars como engine de visualização
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars'); // Define Handlebars como a engine padrão

// Configuração para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static('public'));

// Página inicial de exemplo
app.get('/', (req, res) => {
    res.render('home'); // Renderiza a página 'home'
});

conn.sync().then(() => {
    app.listen(3000)
}).catch(err => console.log(err))



/*
// Rota para adicionar um novo livro ao banco de dados
app.post('/books/insertbook', (req, res) => {
    // Recuperando os dados enviados pelo formulário
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    // Query SQL para inserir o livro no banco de dados
    const sql = `INSERT INTO books (??, ??) VALUES (? ,?)`;
    const data = ['title', 'pageqty', title, pageqty]

    // Executando a query
    pool.query(sql, data, function(err) {
        if (err) {
            console.log(err); // Exibe o erro no console
            return;
        }
        // Redireciona o usuário para a página que lista todos os livros
        res.redirect('/books');
    });
});

// Rota para exibir os detalhes de um livro específico
app.get('/books/:id', (req, res) => {
    // Obtendo o ID do livro a partir do parâmetro da URL
    const id = req.params.id;

    // Query SQL para buscar o livro pelo ID
    const sql = `SELECT * FROM books WHERE ?? = ?`;
     const data = ['id', id] //protejendo a query

    pool.query(sql, data, function(err, data) {
        if (err) {
            console.log(err); // Exibe o erro no console
            return;
        }

        const book = data[0]; // Obtém o primeiro resultado da consulta

        // Renderiza a página 'book' com os dados do livro
        res.render('book', { book });
    });
});

// Rota para exibir o formulário de edição de um livro
app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id; // Obtendo o ID do livro

    const sql = `SELECT * FROM books WHERE ?? = ?`;
     const data = ['id', id] // Buscando os dados do livro

    pool.query(sql, data,function(err, data) {
        if (err) {
            console.log(err); // Exibe o erro no console
            return;
        }

        const book = data[0]; // Obtém o primeiro resultado da consulta

        // Renderiza a página 'editbook' com os dados do livro
        res.render('editbook', { book });
    });
});

// Rota para exibir todos os livros no banco de dados
app.get('/books', (req, res) => {
    // Query SQL para buscar todos os livros
    const sql = 'SELECT * FROM books';

    pool.query(sql, function(err, data) {
        if (err) {
            console.log(err); // Exibe o erro no console
            return;
        }

        const books = data; // Recebe os dados retornados da consulta

        console.log(books); // Exibe os livros no console (apenas para depuração)

        // Renderiza a página 'books' com os dados dos livros
        res.render('books', { books });
    });
});

// Rota para atualizar os dados de um livro
app.post('/books/updatebook', (req, res) => {
    const id = req.body.id; // ID do livro a ser atualizado
    const title = req.body.title; // Novo título
    const pageqty = req.body.pageqty; // Novo número de páginas

    // Query SQL para atualizar os dados do livro
    const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;

    const data = ['title',title, 'pageqty', pageqty, 'id', id]

    pool.query(sql, data, function(err) {
        if (err) {
            console.log(err); // Exibe o erro no console
            return;
        }
        // Redireciona o usuário para a página que lista todos os livros
        res.redirect('/books');
    });
});

//Rota para Remover livros
app.post('/books/remove/:id', (req, res) =>{

    const id = req.params.id //Id do livro a ser excluido

    //sql para exluir livro
    const sql = `DELETE FROM books WHERE ?? = ?`

    const data =['id', id]
    pool.query(sql, data, function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

// Página inicial de exemplo
app.get('/', (req, res) => {
    res.render('home'); // Renderiza a página 'home'
});
/*
// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do servidor de banco de dados
    user: 'root', // Usuário do banco de dados
    password: '', // Senha do banco de dados
    database: 'nodemysql2' // Nome do banco de dados
});

// Estabelecendo a conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err); // Exibe o erro no console
    } else {
        console.log('Conectado ao banco de dados MySQL!');

        // Inicia o servidor na porta 3000
        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
        });
    }
});*/