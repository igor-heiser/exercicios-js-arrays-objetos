// Exercício 11: Métodos de array
// Crie um novo array chamado numeros com alguns números e imprima-o no console.
// 1. Use join() para transformar numeros em uma string separada por vírgulas.
// 2. Use reverse() para inverter a ordem dos elementos de numeros.
// 3. Use slice() para criar um novo array com apenas os dois primeiros elementos de numeros.
// 4. Use sort() para ordenar o array nomes em ordem alfabética.
// 5. Use filter() para criar um novo array contendo apenas os números pares de numeros.
// 6. Use map() para criar um novo array contendo o quadrado de cada elemento de numeros.
// 7. Use reduce() para calcular a soma de todos os elementos de numeros.
// 8. Use forEach() para imprimir cada elemento do array nomes.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

console.log("\n1. Use join() para transformar numeros em uma string separada por vírgulas.");
let strigArray = array.join(", ");
console.log(strigArray);

console.log("\n2. Use reverse() para inverter a ordem dos elementos de numeros.");
array.reverse();
console.log(array);

console.log("\n3. Use slice() para criar um novo array com apenas os dois primeiros elementos de numeros.");
let novoArray = array.slice(0, 2);
console.log(novoArray);

console.log("\n4. Use sort() para ordenar o array nomes em ordem alfabética.");
array.sort();
console.log(array);

console.log("\n5. Use filter() para criar um novo array contendo apenas os números pares de numeros.");
let pares = array.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares);

console.log("\n6. Use map() para criar um novo array contendo o quadrado de cada elemento de numeros.");
let quadrado = array.map(function(numero) {
    return numero * numero;
});
console.log(quadrado);

console.log("\n7. Use reduce() para calcular a soma de todos os elementos de numeros.");
let soma = array.reduce(function(total, numero) {
    return total + numero;
});
console.log(quadrado);

console.log("\n8. Use forEach() para imprimir cada elemento do array nomes.");
array.forEach(function(item, indice) {
    return indice, item;
});
console.log(array);