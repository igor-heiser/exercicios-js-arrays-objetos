// Exercício 23: Atualizando um contato
// Você tem um objeto contato. Inicialmente, o telefone está incorreto e falta o e-mail.
// 1. Crie o objeto contato conforme o código abaixo.
// 2. Altere telefone para "12345-6789".
// 3. Adicione a propriedade email com o valor "contato@exemplo.com".
// 4. Imprima o objeto contato final no console.

let contato = {

    nome: "Ana Silva",
    telefone: "98765-4321",
    cidade: "São Paulo"
    
};

contato.telefone = "12345-6789";
contato.email = "contato@exemplo.com";

console.log(contato);