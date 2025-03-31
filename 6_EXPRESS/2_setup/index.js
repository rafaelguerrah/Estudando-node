const express = require('express');
const app = express();
const port = 3000; //varialvel de ambiente



//criando rota
app.get('/',(req, res) =>{
    res.send("Olá mundo...") // enviado texto usuario
})

//req : é o que recebe do usuario;
// res: é o que agente envia

app.listen(port, () =>{
    console.log(`App rodando na porta: ${port}`)
    // msg para quem esta execultando o servidor
})
