const express = require('express');
const app =express()
const porta = process.env.PORT
const host = '127.0.0.1';

app.get('/',(request, response)=>{
    response.send("Estudo NodeJs")
});
app.get('/canal',(request, response)=>{
    response.json("Bem vindo ao NodeJs")
});

app.listen(porta || 3000, host, ()=>{console.log("Servidor ativo")});