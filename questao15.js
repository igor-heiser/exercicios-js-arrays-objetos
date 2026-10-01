// 2. Objetos
// Exercício 15: Objeto carro
// Crie um objeto chamado carro com as propriedades marca, modelo e ano.
// 1. Acesse a propriedade marca do objeto carro.
// 2. Altere a propriedade ano do objeto carro para 2025.
// 3. Adicione um método getIdade que retorne quantos anos o carro tem.
// 4. Adicione um método getDescricao que retorne uma string contendo todas as informações do carro

let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2012
}

console.log(carro.marca);

carro.ano = 2014;
console.log(carro.ano);

carro.getIdade = function(){
    const anoAtual = new Date().getFullYear();
    return anoAtual - carro.ano;
};

console.log(carro.getIdade());

carro.getDescricao = function(){
    return `DESCRIÇÃO: Marca: ${carro.marca} - Modelo: ${carro.modelo} - Ano: ${carro.ano} - Ano: ${carro.getIdade}`;
};

console.log(carro.getDescricao());