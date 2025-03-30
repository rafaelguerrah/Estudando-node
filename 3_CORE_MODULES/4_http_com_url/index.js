const http = require('http');
const { url } = require('inspector');
const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        res.end('<h1>preencha o nome</h1><form method="GET"><input type="text" name="name"/><button type="submit">Enviar</button></form>');
    } else {
        res.end(`Bem-vindo ${name}`);
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});