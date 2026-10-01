// Exercício 13: Praticando métodos de arrays
// Crie um array chamado frutas com as frutas maçã, banana e laranja. Imprima o array no console.
// Arrays e Objetos em JavaScript | 3
// 1. Acesse o segundo elemento de frutas e imprima-o.
// 2. Adicione "morango" ao final de frutas usando push().
// 3. Remova o primeiro elemento de frutas.
// 4. Crie um array numeros e use push() para adicionar um número ao final.
// 5. Use pop() para remover o último elemento de numeros.
// 6. Use unshift() para adicionar um número no início de numeros.
// 7. Use shift() para remover o primeiro elemento de numeros.
// 8. Crie frutas2 com manga, abacaxi e melancia. Use concat() para unir frutas e frutas2 em todasFrutas.
// 9. Use slice() para criar um novo array contendo apenas os dois primeiros elementos de todasFrutas.
// 10. Use splice() para remover o segundo elemento de todasFrutas.
// 11. Use indexOf() para encontrar o índice de "banana" em todasFrutas.
// 12. Use filter() para criar um novo array contendo apenas as frutas que começam com a letra "m".
// 13. Use map() para criar um novo array contendo o dobro de cada elemento de numeros.
// 14. Use forEach() para imprimir cada elemento de todasFrutas.

let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

// 1
console.log(frutas[1]);

// 2
frutas.push("morango");
console.log(frutas);

// 3
frutas.shift();
console.log(frutas);

// 4
let numeros = [1, 2, 3, 4];

numeros.push(5);
console.log(numeros);

// 5
numeros.pop();
console.log(numeros);

// 6
numeros.unshift(10);
console.log(numeros);

// 7
numeros.shift();
console.log(numeros);

// 8
let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

// 9
let duasFrutas = todasFrutas.slice(0, 2);
console.log(duasFrutas);

// 10
todasFrutas.splice(1, 1);
console.log(todasFrutas);

// 11
let indice = todasFrutas.indexOf("banana");
console.log(indice);

// 12
let frutasComM = todasFrutas.filter(function(fruta) {
    return fruta.startsWith("m");
});
console.log(frutasComM);

// 13
let numerosDobro = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numerosDobro);

// 14
todasFrutas.forEach(function(fruta) {
    console.log(fruta);
});