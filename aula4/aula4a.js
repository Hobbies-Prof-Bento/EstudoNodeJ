const http = require('http');
const fs = require('fs');
const url = require('url');
const porta = process.env.PORT
const host = '127.0.0.1';

const server = http.createServer((request, response)=>{
    fs.readFile("aula4.html", (err, arquivo)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(arquivo);
        return response.end();
    })    
});

server.listen(porta || 3000, host, ()=>{console.log("Servidor ativo")});