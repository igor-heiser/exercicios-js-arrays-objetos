// Exercício 12: Verificando todas as idades
// Crie um array chamado idades com algumas idades. Use o método every() para verificar se todos os
// elementos do array são maiores que 18. Imprima o resultado no console.

let idade = [10, 15, 20, 25, 30, 35, 40, 45];

let verificacao = idade.every(function(idade) {
    return idade > 18;
});

console.log(verificacao);