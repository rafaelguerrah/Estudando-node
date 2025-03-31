const express = require("express");
const { engine } = require("express-handlebars"); // Importação atualizada
const path = require("path");

const app = express();

// Configuração completa do Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main', // Nome do layout padrão
  partialsDir: path.join(__dirname, 'views/partials'), // Caminho absoluto para partials
  layoutsDir: path.join(__dirname, 'views/layouts') // Caminho para layouts
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views')); // Configura o diretório de views

// Rotas (mantidas como estão, com pequenos ajustes)
app.get('/dashboard', (req, res) => {
  const itens = ["Item a", "item b", "item c"];
  res.render('dashboard', { itens });
});

app.get('/post', (req, res) => {
  const post = {
    title: "Aprendendo node.Js",
    category: "Javascript",
    body: "Este artigo vai te ajudar a aprender node js",
    comments: 4
  };
  res.render('blogpost', { post });
});

app.get('/blog', (req, res) => {
  const posts = [ // Renomeado para 'posts' (plural) para melhor semântica
    {
      title: "Aprendendo node js",
      category: "JavaScript",
      body: "Teste",
      comments: 4
    },
    {
      title: "Aprendendo node php",
      category: "php",
      body: "Teste",
      comments: 5
    },
    {
      title: "Aprendendo node c++",
      category: "c++",
      body: "Teste",
      comments: 10
    }
  ];
  res.render('blog', { posts }); // Agora usando 'posts'
});

app.get('/', (req, res) => {
  const user = {
    name: "Rafael",
    surname: "Guerra",
    age: "30"
  };
  const palavra = {
    texto: "Textooo"
  };
  const auth = true;
  const approved = false; // Corrigido: 'approved' em vez de 'aproved'
  res.render('home', { user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log('App funcionando na porta 3000...');
});