// Enunciado: Crie um programa em JavaScript que solicite ao usuário que digite o 
// dia da semana e utilizando if e else if, exiba mensagens diferentes para cada dia. Se 
// for sábado ou domingo, exibir uma mensagem de fim de semana. Caso seja 
// inválido, exibir aviso.

const prompt = require ("prompt-sync")();

let diaDaSemana = prompt("qual o dia da semana?: ").toLowerCase();

if (diaDaSemana === "segunda"){
    console.log("segunda-feira ngm merece..");
}
else if(diaDaSemana === "terça"){
    console.log("boa terça-feira");
}
else if(diaDaSemana === "quarta"){
    console.log("boa quarta-feira");
}
else if(diaDaSemana === "quinta"){
    console.log("boa quinta-feira");
}
else if(diaDaSemana === "sexta"){
    console.log("finalmente sexta!!!!!!!!");
}
else if(diaDaSemana === "sabado"){
    console.log("bom final de semana, sabado");
}
else if(diaDaSemana === "domingo"){
    console.log("bom final de semana, domingo");
}else{
    console.log("resultado invalido");
}



// //! usando switch case 
// const prompt = require("prompt-sync")();

// let diaDaSemana = prompt("Qual o dia da semana?: ").toLowerCase();

// switch (diaDaSemana) {
//     case "segunda":
//         console.log("Segunda-feira, ninguém merece...");
//         break; // O 'break' é crucial, ele impede que o código continue para o próximo caso.

//     case "terça":
//         console.log("Boa terça-feira!");
//         break;

//     case "quarta":
//         console.log("Boa quarta-feira!");
//         break;

//     case "quinta":
//         console.log("Boa quinta-feira!");
//         break;

//     case "sexta":
//         console.log("Finalmente SEXTA!");
//         break;

//     case "sabado":
//     case "domingo":
//         console.log("Bom final de semana!");
//         break;

//     default:
//         console.log("Dia inválido.");
//         break;
// }