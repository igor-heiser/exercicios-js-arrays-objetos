// Dado o objeto livro abaixo, use Object.keys(), Object.values() e Object.entries().
// 1. Obtenha um array com todas as chaves.
// 2. Obtenha um array com todos os valores.
// 3. Obtenha um array de arrays, em que cada subarray seja um par [chave, valor].
// 4. Imprima os três resultados no console.

let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

console.log(Object.keys(livro));

console.log(Object.values(livro));

console.log(Object.entries(livro));