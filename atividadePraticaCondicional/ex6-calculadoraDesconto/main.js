// Enunciado: Crie um programa em JavaScript que solicite ao usuário o valor total da 
// compra e utilize if e else if para aplicar um desconto conforme o valor 
// informado. Se o valor for menor que R$ 100, exiba “Sem desconto.”; de R$ 100 até 
// R$ 199, aplique 10% de desconto; de R$ 200 até R$ 499, aplique 20%; e se for R$ 
// 500 ou mais, aplique 30%. Ao final, mostre o valor já com o desconto aplicado. Caso 
// o valor digitado não seja válido, exiba “Valor inválido. Tente novamente.”

const prompt = require ("prompt-sync")();

let valorTotal = Number(prompt("Qual o valor total da compra?: "));

if (valorTotal < 100){
    console.log("sem descontos");
}
else if (valorTotal > 100 && valorTotal < 200){
    desconto = valorTotal * 0.1
    valorDescontado = valorTotal - desconto
    console.log(`sua compra de ${valorTotal} recebeu um desconto de 10% e ficou no valor de ${valorDescontado}`);
}
else if (valorTotal >= 200 && valorTotal <= 499){
    desconto = valorTotal * 0.2
    valorDescontado = valorTotal - desconto
    console.log(`sua compra de ${valorTotal} recebeu um desconto de 20% e ficou no valor de ${valorDescontado}`);
}
else if (valorTotal >= 500){
    desconto = valorTotal * 0.3
    valorDescontado = valorTotal - desconto
    console.log(`sua compra de ${valorTotal} recebeu um desconto de 30% e ficou no valor de ${valorDescontado}`);
}else{
    console.log("valor invalido");
}