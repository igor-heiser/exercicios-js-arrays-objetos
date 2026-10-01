// Exercício 36: Apresentação pessoal
// Crie um objeto pessoa com as propriedades nome e anoNascimento. Adicione um método apresentar que
// calcule a idade de forma simplificada (2025 - anoNascimento) e retorne uma string como: "Olá, meu nome
// é [nome] e eu tenho [idade] anos." Use a palavra-chave this.

let pessoa = {
    nome: "Kaua",
    anoNascimento: 1989
}

pessoa.apresentar = function(){

    let idade = 2025 - this.anoNascimento;
    return `Olá, meu nome é ${this.nome} e eu tenho ${idade} anos.`

}

console.log(pessoa.apresentar());