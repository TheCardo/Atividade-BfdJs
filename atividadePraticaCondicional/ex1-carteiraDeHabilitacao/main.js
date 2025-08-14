// Enunciado: Crie um programa em JavaScript que solicite a idade do usuário e se 
// possui carteira de habilitação. Use if com o operador lógico && para verificar se tem 
// 18 anos ou mais e carteira igual a 'sim'. Caso verdadeiro, exibir que pode dirigir, 
// senão exibir que não pode.


//!metodo 1

const prompt = require ("prompt-sync")();

let idade = Number(prompt("digite sua idade: "));
let possuiHabilitacao = prompt("você possui habilitação? (responda com sim ou não): ");

if (idade >= 18 && possuiHabilitacao === "sim"){
    console.log("você esta apto para dirigir")
}else{
    console.log("você não pode dirigir");
}



//! metodo 2

// const prompt = require ("prompt-sync")();

// let idade = Number(prompt("digite sua idade: "));
// let possuiHabilitacao = prompt("você possui habilitação? (responda com sim ou nao): ");

// let temHabilitacao = (possuiHabilitacao.toLowerCase() === "sim") //? o metodo toLowerCase serve para garantir que tudo o que o usuario digitar sera minusculo

// if (idade >= 18 && temHabilitacao){
//     console.log("você esta apto para dirigir")
// }else{
//     console.log("você não pode dirigir");
// }