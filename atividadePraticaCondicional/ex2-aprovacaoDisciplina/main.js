// Enunciado: Crie um programa em JavaScript que peça a média final e a frequência 
// do aluno. Use if com o operador lógico && para verificar se a média é maior ou igual 
// a 7 e frequência maior ou igual a 75. Se verdadeiro, exibir que foi aprovado, senão 
// que foi reprovado.

const prompt = require ("prompt-sync")();

let mediaFinal = Number(prompt("digite a média final do aluno: "));
let frequencia = Number(prompt("digite a frequencia do aluno: "));

if (mediaFinal >= 7 && frequencia >= 75){
    console.log("aluno aprovado");
}else{
    console.log("aluno reprovado");
}

