const express = require("express");
const exphbs = require("express-handlebars");

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) =>{
    const itens = ["Item a", "item b", "item c"]

    res.render('dashboard', {itens})
})

app.get('/post', (req, res) => {
    const post ={
        title: "Aprendendo node.Js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender node js",
        comments: 4

    }

    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name:"Rafael",
        surname:"Guerra",
        age:"30"
    }

    const palavra = {
        texto : "Textooo"
    }

    const auth = true;
    const aproved = false;
    res.render('home', {user: user, palavra, auth, aproved})
})

app.listen(3000, () =>{
    console.log('App funcionando...')
})

