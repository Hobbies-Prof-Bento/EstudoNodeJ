const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const server = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    if(request.url == '/')
        response.write('<h1>Seja Bem Vindo</h2>');
    else if(request.url == '/canal')
        response.write('<h1>Estudo Nodejs</h2>');
    else if(request.url == '/curso')
        response.write('<h1>Nodejs</h2>');
    response.end();
});

server.listen(porta, host, ()=>{console.log("Servidor ativo")});