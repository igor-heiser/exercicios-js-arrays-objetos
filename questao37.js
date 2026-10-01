// Exercício 37: Percorrendo com for...in
// Dado o objeto carro abaixo, use um laço for...in para percorrer todas as propriedades e imprimir cada
// chave e seu respectivo valor no formato "chave: valor".

let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022
};

for(let chave in carro){
    console.log(chave + ": " + carro[chave]);
};