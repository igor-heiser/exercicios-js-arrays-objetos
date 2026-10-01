// Exercício 26: Informações da matrícula
// Crie um objeto aluno com as propriedades nome e matricula.
// A propriedade matricula deve ser um objeto contendo numero e curso.
// 1. Crie o objeto aluno.
// 2. Modifique o número da matrícula para um novo valor.
// 3. Imprima o objeto aluno completo.

let aluno = {

    nome: "Igor",
    matricula: {
        numero: 12345,
        curso: "Desenvolvimento de Sistemas"
    }
    
};

aluno.matricula.numero = 54321;

console.log(aluno);