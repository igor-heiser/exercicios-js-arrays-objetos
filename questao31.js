// Exercício 31: Mesclando objetos
// Crie dois objetos: dadosPessoais com nome e idade, e dadosProfissionais com cargo e empresa. Use o
// operador de espalhamento para criar funcionarioCompleto com as propriedades de ambos. Imprima o
// resultado.

let dadosPessoa = {
    nome: "João",
    idade: 18
}

let dadosProfissionais = {
    cargo: "CEO",
    empresa: "João corp"
}

let funcionarioCompleto = {...dadosPessoa, ...dadosProfissionais};

console.log(funcionarioCompleto);