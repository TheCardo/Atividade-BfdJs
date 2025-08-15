// Enunciado: Crie um programa em JavaScript que solicite dois números e um 
// símbolo de operação (+, -, *, /). Utilize if e else if para verificar qual operação foi 
// escolhida e mostrar o resultado. Caso seja inválida, exibir aviso.

const prompt = require ("prompt-sync")();

let num1 = Number(prompt("digite o primeiro numero para nossa operação: "))
let num2 = Number(prompt("digite o primeiro numero para nossa operação: "))
let operador = prompt("qual operador voce deseja usar?\n + para adição \n - para subtração \n * para multiplicação \n / para divisão: \n ")

let resultadoAdicao = num1 + num2
let resultadoSubtracao = num1 - num2
let resultadoMultiplicacao = num1 * num2
let resultadoDivisao = num1/ num2

if (operador === "+"){
    console.log(`a soma de ${num1} + ${num2} é ${resultadoAdicao}`);
}
else if (operador === "-"){
    console.log(`a subtração de ${num1} - ${num2} é ${resultadoSubtracao}`);
}
else if (operador === "*"){
    console.log(`a multiplicação de ${num1} * ${num2} é ${resultadoMultiplicacao}`);
}
else if (operador === "/"){
    console.log(`a divisão de ${num1} / ${num2} é ${resultadoDivisao}`);
}else{
    console.log("operação não reconhecida");
}


//! USANDO SWITCH CASE

switch (operador){
    case "+":
        console.log(`a soma de ${num1} + ${num2} é ${resultadoAdicao}`);
        break;

    case "-":
        console.log(`a subtração de ${num1} - ${num2} é ${resultadoSubtracao}`);
        break;
    
    case "*":
        console.log(`a multiplicação de ${num1} * ${num2} é ${resultadoMultiplicacao}`);
        break

    case "/":
        console.log(`a divisão de ${num1} / ${num2} é ${resultadoDivisao}`);
        break
    
        default:
            console.log("operação não reconhecida");
            break



}