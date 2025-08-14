// Enunciado: Crie um programa em JavaScript que solicite a idade do usuário e se 
// possui carteira de habilitação. Use if com o operador lógico && para verificar se tem 
// 18 anos ou mais e carteira igual a 'sim'. Caso verdadeiro, exibir que pode dirigir, 
// senão exibir que não pode.


const prompt = require ("prompt-sync")();

let idade = Number(prompt("digite sua idade: "));
let possuiHabilitacao = prompt("você possui habilitação?: ");

if (idade >= 18 && possuiHabilitacao === "sim"){
    console.log("você esta apto para dirigir")
}else{
    console.log("você não pode dirigir");
}