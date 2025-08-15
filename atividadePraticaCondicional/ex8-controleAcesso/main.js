// Enunciado: Crie um programa em JavaScript que pergunte ao usuário sua idade e 
// se ele possui permissão dos pais, sendo a resposta “sim” ou “não”. O programa 
// deve permitir o acesso se o usuário tiver 18 anos ou mais. Caso o usuário seja 
// menor de 18 anos, o acesso só deve ser permitido se ele tiver permissão dos pais. 
// Se nenhuma dessas condições for atendida, o programa deve negar o acesso.

const prompt = require ("prompt-sync")();

let idade = Number(prompt("Qual a sua idade?: "))
let permissao = prompt("você tem a permissão dos seus pais? (sim ou não): ").toLowerCase()


if (idade >= 18 ){
    console.log("acesso permitido");
}
else if (idade < 18 && permissao === "sim"){
    console.log("voce esta permitido entrar pela permissão dos pais");
}                          
else {
    console.log("acesso negado");
}