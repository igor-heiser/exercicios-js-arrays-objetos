// Exercício 14: Criando uma matriz
// Crie uma função chamada criarMatriz que receba o número de linhas e o número de colunas como
// parâmetros e retorne uma matriz com essas dimensões preenchida com números aleatórios.

let linhas = 3;
let colunas = 3;

function criarMatriz(linhas, colunas) {
    let matriz = [];

    for(let i = 0; i < linhas; i++) {
        let linha = [];

        for(let j = 0; j < colunas; j++) {
            let numero = Math.floor(Math.random() * 10);
            linha.push(numero);
        }

        matriz.push(linha);
    }

    return matriz;
}

console.log(criarMatriz(linhas, colunas));