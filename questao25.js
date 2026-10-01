// Exercício 25: Detalhes do usuário
// Crie um objeto usuario com uma propriedade nome e uma propriedade endereco.
// O valor de endereco deve ser outro objeto com as propriedades rua, numero e cidade.
// 1. Crie o objeto usuario com dados fictícios.
// 2. Usando console.log(), imprima:
// "O usuário mora em [cidade], na [rua]."

let usuario = {

    nome: "João",
    endereco: {
        rua: "Rua das Flores",
        numero: 150,
        cidade: "Jaraguá do Sul"
    }
    
};

console.log(`O usuário mora em ${usuario.endereco.cidade}, na ${usuario.endereco.rua}.`);