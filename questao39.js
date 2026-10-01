// Exercício 39: Objeto imutável
// 1. Crie um objeto configuracao com a propriedade status definida como "ativo".
// 2. Use Object.freeze() para congelar o objeto.
// 3. Tente alterar status para "inativo" e adicionar versao com valor 1.0.
// 4. Imprima o objeto para confirmar que ele não sofreu alteração.

let configuracao = {
    status: "ativo"
};

Object.freeze(configuracao);

configuracao.status = "inativo";
configuracao.versao = 1.0;

console.log(configuracao);