// Exercício 33: Herança simples
// 1. Crie um objeto veiculo com a propriedade rodas igual a 4.
// 2. Crie um objeto carro usando Object.create(veiculo). O objeto carro deve ter a propriedade própria marca
// com valor "Ford".
// 3. Imprima a marca do carro.
// 4. Imprima a quantidade de rodas do carro. Observe que rodas está no protótipo.

let veiculo = {
    rodas: 4
}

let carro = Object.create(veiculo);

carro.marca = "Ford";

console.log(carro.marca);
console.log(carro.rodas);