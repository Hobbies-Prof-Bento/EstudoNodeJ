const express = require('express');
const rotas = require('./rotas/rotas');
const porta = process.env.PORT || 3000;
const host = '127.0.0.1';
const app =express();

app.use('/',rotas);

app.get('*',(request, response)=>{
    response.send("Estudo NodeJs")
});

app.listen(porta, host, ()=>{console.log("Servidor ativo")});