// Exercício 32: Array como argumentos de função
// Crie uma função mostrarNumeros que aceite três argumentos (a, b, c) e os imprima. Crie um array
// meusNumeros com [10, 20, 30]. Use o operador de espalhamento para passar os elementos do array
// como argumentos para a função mostrarNumeros.

function mostrarNumeros(a, b, c){
    console.log(a, b, c);
};

let meusNumeros = [10, 20, 30];

mostrarNumeros(...meusNumeros);