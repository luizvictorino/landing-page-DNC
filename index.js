// Seleciona os elementos do DOM e os armazena em constantes
const leonardo = document.getElementById("leonardo");
const samantha = document.getElementById("samantha");
const bruna = document.getElementById("bruna");
const setaEsquerda = document.getElementById("setaEsquerda");
const setaDireita = document.getElementById("setaDireita");

// Função auxiliar para alternar a exibição de um elemento
function toggleDisplay(element, displayStyle) {
    element.style.display = displayStyle;
}

// Função que oculta 'Leonardo', mostra 'Bruna', exibe a seta para a esquerda e oculta a seta para a direita
function rolarParaDireita() {
    toggleDisplay(leonardo, "none"); // Esconde 'Leonardo'
    toggleDisplay(bruna, "flex");    // Mostra 'Bruna'
    toggleDisplay(setaEsquerda, "flex"); // Mostra a seta para a esquerda
    toggleDisplay(setaDireita, "none");  // Esconde a seta para a direita
}

// Função que mostra 'Leonardo', oculta 'Bruna', oculta a seta para a esquerda e exibe a seta para a direita
function rolarParaEsquerda() {
    toggleDisplay(leonardo, "flex");  // Mostra 'Leonardo'
    toggleDisplay(bruna, "none");     // Esconde 'Bruna'
    toggleDisplay(setaEsquerda, "none"); // Esconde a seta para a esquerda
    toggleDisplay(setaDireita, "flex");  // Mostra a seta para a direita
}
