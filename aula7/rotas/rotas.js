const express = require('express');
const rotas = express.Router()
const porta = process.env.PORT
const host = '127.0.0.1';

let cursos_info = [
    {'curso': 'node', 'info': "Curso de node"},
    {'curso': 'react', 'info': "Curso de react"},
    {'curso': 'java', 'info': "Curso de java"},
    {'curso': 'arduino', 'info': "Curso de arduino"},
];

rotas.get('/',(request, response)=>{
    response.json({ola: "Seja bem vindo"});
});
rotas.get('/:cursoid',(request, response)=>{
    const curso=request.params.cursoid;
    const cursoI = cursos_info.find(i=>i.curso == curso);
    if(!cursoI){
        response.status(404).json({erro: "Curso " + curso + " não encontrado"});
    }
    else{
        response.status(200).json(cursoI);
    }
    
});

module.exports = rotas;