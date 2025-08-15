// Enunciado: Crie um programa em JavaScript que solicite ao usuário um número 
// inteiro e utilize if e else para verificar se ele é par ou ímpar, exibindo a 
// mensagem correspondente. Caso o valor digitado não seja um número válido, 
// mostre “Número inválido.” 


const prompt = require ("prompt-sync")();

let num = Number(prompt("Digite um numero para saber se é par ou impar: "))

if (num % 2 === 0){
    console.log(`o numero ${num} é par`);
}else{
    console.log(`o número ${num} é ìmpar`);
}