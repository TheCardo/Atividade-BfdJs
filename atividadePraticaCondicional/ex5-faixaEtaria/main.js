// Enunciado: Crie um programa em JavaScript que solicite ao usuário que digite sua 
// idade e utilize if e else if para classificar e exibir uma mensagem apropriada. 
// Se a idade for menor que 12 anos, exiba “Você é uma criança.”; se estiver entre 12 
// e 17 anos, exiba “Você é um adolescente.”; se estiver entre 18 e 59 anos, exiba 
// “Você é um adulto.”; e se for 60 anos ou mais, exiba “Você é um idoso.” Caso o 
// valor digitado não seja um número válido, mostre a mensagem “Idade inválida". 
// Tente novamente.”
const prompt = require ("prompt-sync")();

let idade = Number(prompt("qual a sua idade?: "))

if(idade <=12){
    console.log("você é uma criança");
}
else if(idade > 12 && idade <= 17){
    console.log("você é um adolescente");
}
else if (idade >= 18 && idade < 60){
    console.log("você é um adulto");
}
else if (idade > 60 ){
    console.log("você é um idoso");
}else{
    console.log("idade invalida");
}
