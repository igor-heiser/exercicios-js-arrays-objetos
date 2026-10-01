// Exercício 6: Ordenando três números
// Crie uma função que receba um array de 3 números e coloque seus elementos em ordem crescente. Crie
// sua própria lógica para realizar a ordenação.

const prompt = require('prompt-sync')();

let lista = [];
let opcao;

do{

    console.log("1 - Digitar números");
    console.log("2 - Ver lista em ordem crescente");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao){
        case 1:
            let numero = Number(prompt("Digite o número: "));
            lista.push(numero);
            break;
        case 2:
            console.log(lista.sort());
            break;
        case 0:
            console.log("Ecerrando sistema...");
            break;
        default:
            console.log("ERRO: número inválido.");
            break;
    }

}while(opcao != 0);