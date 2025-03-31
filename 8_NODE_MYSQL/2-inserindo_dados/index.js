const express = require('express');
const exphbs = require('express-handlebars');  // Nome correto do pacote
const mysql = require('mysql2');  // Ou 'mysql2' se você instalou

const app = express();-

//configurar o express para pega o body
app.use(
    express.urlencoded({
        extended: true
    })
)
//pegar o body em json
app.use(express.json())


// Configuração do Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//chamando o css
app.use(express.static('public'));

//rotas inserire arquivos
app.post('/books/insertbook', (req, res) =>{
    const title =  req.body.title
    const pageqty =  req.body.pageqty

    const sql =`INSERT INTO books (title, pageqty) VALUE ('${title}', '${pageqty}') `

    connection.query(sql, function(err){
        if(err){
            comsole.log(err)
        }
        res.redirect('/')
    })
})


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