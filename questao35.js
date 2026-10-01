// Exercício 35: Compartilhando métodos
// 1. Crie uma função construtora Guerreiro que aceite nome e tenha vida com valor inicial 100.
// 2. Adicione um método atacar ao Guerreiro.prototype que imprima "Atacando!".
// 3. Crie duas instâncias: guerreiro1 com nome "Arthur" e guerreiro2 com nome "Lancelot".
// 4. Verifique que ambos podem usar atacar(). O objetivo é perceber que as instâncias compartilham o
// método por meio do protótipo.

function Guerreiro(nome, vida){
    this.nome = nome;
    this.vida = 100;
};

Guerreiro.prototype.atacar = function(){
    console.log("Atacando!");
};

let guerreiro1 = new Guerreiro("Arthur");
let guerreiro2 = new Guerreiro("Lancelot");

guerreiro1.atacar();
guerreiro2.atacar();