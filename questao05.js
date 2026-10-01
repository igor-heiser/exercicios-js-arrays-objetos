// Exercício 5: Manipulando um array de frutas
// Crie um array chamado frutas que contenha "maçã", "banana" e "laranja".
// 1. Imprima o segundo elemento do array frutas.
// 2. Adicione "manga" ao final do array frutas.
// 3. Remova o primeiro elemento do array frutas.
// 4. Verifique o tamanho do array frutas.
// 5. Crie um loop for que percorra o array frutas e imprima cada fruta.
// 6. Use o método forEach() para imprimir cada elemento do array frutas.
// 7. Use o método map() para criar um novo array que contenha o tamanho de cada fruta.
// 8. Use o método filter() para criar um novo array que contenha apenas as frutas com mais de 5 caracteres.
// 9. Use o método reduce() para calcular a soma dos números de um array numérico.

let frutas = ["maçã", "banana", "laranja"];

console.log("\nImprima o segundo elemento do array frutas.");
console.log(frutas[1]);

console.log("\nAdicione ao final do array frutas.");
frutas.push("manga");
console.log(frutas);

console.log("\nRemova o primeiro elemento do array frutas.");
frutas.shift(frutas);
console.log(frutas);

console.log("\nVerifique o tamanho do array frutas.");
console.log(frutas.length);

console.log("\nCrie um loop for que percorra o array frutas e imprima cada fruta.");
for(let i = 0; i < frutas.length; i++){
    console.log(i + " - " + frutas[i]);
}

console.log("\nUse o método forEach() para imprimir cada elemento do array frutas.");
frutas.forEach(function(item, indice) {
  console.log(indice, item);
});

console.log("\nUse o método map() para criar um novo array que contenha o tamanho de cada fruta.");
let tamanho = frutas.map(function(frutas) {
    return frutas.length;
});
console.log(tamanho);

console.log("\nUse o método filter() para criar um novo array que contenha apenas as frutas com mais de 5 caracteres.");
let novasFrutas = frutas.filter(function(frutas) {
    return frutas.length > 5;
});
console.log(novasFrutas);

console.log("\nUse o método reduce() para calcular a soma dos números de um array numérico.");
let arrayNumerico = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let listaReduzida = arrayNumerico.reduce(function(total, numero) {
    return total + numero;
});
console.log(listaReduzida);