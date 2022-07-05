const http = require('http');
const url = require('url');
const porta = process.env.PORT
const host = '127.0.0.1';

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end("Estudo Node");
});

server.listen(porta || 3000, host, ()=>{console.log("Servidor ativo")});