// Exercício 2: Filtrando números maiores
// Crie uma função que aceite dois parâmetros: um array de números e um número. A função deve retornar
// um novo array com todos os números maiores que o número fornecido.

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novoArray = [];
let numero = 5;

function juntarArrays(arrayNumeros, numero){
    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] > numero){
            novoArray.push(arrayNumeros[i]);
        }
    }

    return novoArray;
}

console.log(juntarArrays(arrayNumeros, numero));