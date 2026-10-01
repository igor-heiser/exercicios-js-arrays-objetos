// Exercício 24: Cardápio do dia
// Gerencie as informações de um lanche em um cardápio.
// 1. Crie um objeto lanche com nome "X-Burger", preco 15.00 e ingredientes ["pão", "hambúrguer", "queijo",
// "alface"].
// 2. Acesse os dados e imprima uma frase como: "O lanche X-Burger custa R$ 15.00."
// 3. Modifique o preço para 17.50.
// 4. Adicione a propriedade vegano com o valor false.
// 5. Imprima o objeto lanche completo.

let lanche = {

    nome:  "X-Burger",
    preco: 15.00,
    ingredientes: ["pão", "hambúrguer", "queijo", "alface"]
    
};

lanche.preco = 17.50;

lanche.vegano = false;

console.log("O lanche X-Burger custa R$ 15.00.");
console.log(lanche);