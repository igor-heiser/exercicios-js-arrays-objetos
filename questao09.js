// Exercício 9: Juntando dois arrays
// Crie uma função que junte dois arrays e retorne o resultado como um novo array.

const prompt = require('prompt-sync')();

let array1 = [];
let array2 = [];
let opcao;
let numero;
let arraysJuntos;

function juntarArrays(array1, array2){
    return arraysJuntos = array1.concat(array2);
}

do{

    console.log("1 - Digitar números para o primeiro array");
    console.log("2 - Digitar números para o segundo array");
    console.log("3 - Juntar arrays");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao){
        case 1:
            numero = Number(prompt("Digite o número: "));
            array1.push(numero);
            break;
        case 2:
            numero = Number(prompt("Digite o número: "));
            array2.push(numero);
            break;
        case 3:
            console.log(juntarArrays(array1, array2));
            break;
        case 0:
            console.log("Ecerrando sistema...");
            break;
        default:
            console.log("ERRO: número inválido.");
            break;
    }

}while(opcao != 0);