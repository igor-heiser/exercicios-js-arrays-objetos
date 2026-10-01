// Exercício 29: Combinando arrays
// Crie dois arrays: frutas com ["Maçã", "Banana"] e maisFrutas com ["Laranja", "Uva"]. Use o operador de
// espalhamento para criar um novo array todasAsFrutas que seja a combinação dos dois. Imprima
// todasAsFrutas.

let frutas = ["Maçã", "Banana"];
let maisFrutas = ["Laranja", "Uva"];

let todasAsFrutas = [...frutas, ...maisFrutas];

console.log(todasAsFrutas);