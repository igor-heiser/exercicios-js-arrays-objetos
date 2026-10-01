// Exercício 34: Funções construtoras e protótipos
// 1. Crie uma função construtora Produto que aceite nome e preco e os atribua ao this.
// 2. Adicione um método descrever ao Produto.prototype. Ele deve imprimir uma string no formato "Nome
// do produto custa R$ preço".
// 3. Crie uma instância de Produto, por exemplo: let livro = new Produto("O Senhor dos Anéis", 80);
// 4. Chame livro.descrever().

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.descrever = function(){
    console.log(`${livro.nome} custa R$${livro.preco}`);
};

let livro = new Produto("Diário de um banana", 67.67);

livro.descrever();