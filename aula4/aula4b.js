const http = require('http');
const fs = require('fs');
const url = require('url');
const porta = process.env.PORT
const host = '127.0.0.1';

const server = http.createServer((request, response)=>{
    fs.appendFile('teste.txt',"Curso de NodeJs", (err)=>{
        if(err)throw err;
        console.log("Arquivo criado!");
        return response.end();      
    })    
});

server.listen(porta || 3000, host, ()=>{console.log("Servidor ativo")});