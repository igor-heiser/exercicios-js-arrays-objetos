// Exercício 10: Manipulando uma lista de nomes
// Crie um array chamado nomes com os nomes de algumas pessoas que você conhece. Imprima o array no
// console.
// 1. Adicione um novo nome ao final do array nomes e imprima o resultado.
// 2. Remova o último nome do array nomes e imprima o resultado.
// 3. Adicione um novo nome ao início do array nomes e imprima o resultado.
// 4. Remova o primeiro nome do array nomes e imprima o resultado.

console.log("\nCrie um array chamado nomes com os nomes de algumas pessoas que você conhece. Imprima o array no console.");
let nomes = ["José", "Jackson", "Judite", "Josefino", "Josifina"];
console.log(nomes);

console.log("\nAdicione um novo nome ao final do array nomes e imprima o resultado.");
nomes.push("Jurema");
console.log(nomes);

console.log("\nRemova o último nome do array nomes e imprima o resultado.");
nomes.pop();
console.log(nomes);

console.log("\nAdicione um novo nome ao início do array nomes e imprima o resultado.");
nomes.unshift("Jamilton");
console.log(nomes);

console.log("\nRemova o primeiro nome do array nomes e imprima o resultado.");
nomes.shift();
console.log(nomes);