// Exercício 8: Ordenando um array
// Crie uma função que receba um array de qualquer tamanho e ordene seus elementos em ordem
// crescente.

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
            console.log(lista.reverse());
            break;
        case 0:
            console.log("Ecerrando sistema...");
            break;
        default:
            console.log("ERRO: número inválido.");
            break;
    }

}while(opcao != 0);