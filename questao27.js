// Exercício 27: Lista de compras
// Crie um array chamado carrinhoDeCompras.
// Cada item deve ser um objeto com as propriedades produto e quantidade.
// A propriedade produto deve ser outro objeto com nome e preco.
// 1. Crie o array com pelo menos dois itens.
// 2. Acesse e imprima o nome do primeiro produto.
// 3. Acesse e imprima o preço do segundo produto.

let carrinhoDeCompras = {

    item1: {
        produto1: { 
        nome: "Notebook",
        preco: 999.90
        },
    quantidade: 3
    },
    
    item2: {
        produto2: {
        nome: "Celular",
        preco: 15.50
        },
    quantidade: 5
    }

}

console.log(carrinhoDeCompras.item1);
console.log(carrinhoDeCompras.item2);