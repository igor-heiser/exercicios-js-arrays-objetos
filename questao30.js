// Exercício 30: Copiando um objeto
// Crie um objeto configuracoes com tema: "dark" e idioma: "pt-br". Crie novasConfiguracoes como uma
// cópia usando o operador de espalhamento. Altere o tema em novasConfiguracoes para "light" e imprima
// os dois objetos para demonstrar que o original não foi alterado.

let configuracoes = {
    tema: "dark",
    idioma: "pt-br"
};

let novasConfiguracoes = {...configuracoes};
novasConfiguracoes.tema = "light";

console.log("Objeto original:");
console.log(configuracoes);

console.log("Objeto cópia:");
console.log(novasConfiguracoes);