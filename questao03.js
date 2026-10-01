// Exercício 3: Contando ocorrências
// Crie uma função que aceite um array e um valor. A função deve retornar a quantidade de vezes que o
// valor aparece no array.

let array = [1, 1, 1, 2, 2, 2, 3, 3, 3];
let valor = 1;
let cont = 0;

function contarOcorrencias(array, valor){
    for(let i = 0; i < array.length; i++){
        if(array[i] == valor){
            cont++;
        }
    }

    return cont;
}

console.log(contarOcorrencias(array, valor));