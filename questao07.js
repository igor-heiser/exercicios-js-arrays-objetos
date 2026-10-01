// Exercício 7: Invertendo a sequência
// Crie um script que solicite 3 números ao usuário, coloque-os em um array e depois exiba o array. Em
// seguida, modifique os elementos para que a sequência fique ao contrário. Exemplo: se o usuário digitou 1,
// 2 e 3, o resultado deve ser 3, 2 e 1.

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