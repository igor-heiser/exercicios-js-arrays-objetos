//Exercício 1: Calculando a média
//Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a
//média dos números

const prompt = require('prompt-sync')();

let lista = [];
let opcao;

do{

    console.log("1 - Digitar números");
    console.log("2 - Ver média");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao){
        case 1:
            let numero = Number(prompt("Digite o número: "));
            lista.push(numero);
            break;
        case 2:
            console.log(calcularMedia(lista));
            break;
        case 0:
            console.log("Ecerrando sistema...");
            break;
        default:
            console.log("ERRO: número inválido.");
            break;
    }

}while(opcao != 0);

function calcularMedia(lista){
    let soma = 0;

    for (let i = 0; i < lista.length; i++){
        soma += lista[i];
    }

    let media = soma / lista.length;

    return media;
}