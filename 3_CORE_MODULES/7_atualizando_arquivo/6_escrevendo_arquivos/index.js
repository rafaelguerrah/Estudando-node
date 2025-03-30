const fs = require('fs');
const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro ao carregar o arquivo HTML');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {

        const nameNewLine = name + '\r\n';
        fs.appendFile('arquivo.txt', nameNewLine, function (err) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro ao salvar o nome');
                return;
            }
            // Redireciona para a página inicial após salvar o nome
            res.writeHead(302, { 'Location': '/' });
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
