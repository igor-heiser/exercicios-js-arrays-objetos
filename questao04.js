// Exercício 4: Criando um array sequencial
// Crie uma função que aceite um número e retorne um array com todos os números de 1 até o número
// fornecido, incluindo o próprio número.

let array = [];
let numero = 5;

function criarArray(array, numero){
    for(i = 1; i < numero; i++){
        array.push(i);
    }

    return array;
}

console.log(criarArray(array, numero));