// Refatoração pós resultado na aula. Mantive algumas coisas como estavam, mas algumas precisei mudar para implementar novas funcionalidades sugeridas em desafios
function alterarStatus(id) {

    // Trouxe as variáveis pra dentro da função, o que fazia mais sentido
    let gameClicado = document.getElementById(`game-${id}`); // Mudei a forma com que pegava o ID do jogo, separando a variável que representa o jogo que foi clicado
    let botao = document.getElementsByTagName('a');
    let imagem = document.getElementsByClassName('dashboard__item__img');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent; // Adicionei a variável nomeJogo para poder exibir na confirmação

    if(botao[id - 1].classList.contains('dashboard__item__button--return')) { 

        // Esse novo if chama a janela de confirmação de devolução
        if(confirm(`Tem certeza que gostaria de devolver ${nomeJogo}?`)) { 
            botao[id - 1].classList.remove('dashboard__item__button--return');
            botao[id - 1].textContent = 'Alugar';
            imagem[id - 1].classList.remove('dashboard__item__img--rented');
            quantidadeAlugados(); // Aqui chamo a função de quantidade de jogos alugados sempre que um novo jogo é devolvido
        }
    } else {

        // Esse novo if chama a janela de confirmação de locação (no desafio era só para devolução, mas achei que ficaria legal)
        if(confirm(`Tem certeza que gostaria de alugar ${nomeJogo}?`)) { 
            botao[id - 1].classList.add('dashboard__item__button--return')
            botao[id - 1].textContent = 'Devolver';
            imagem[id - 1].classList.add('dashboard__item__img--rented');
            quantidadeAlugados(); // Aqui chamo a função de quantidade de jogos alugados sempre que um novo jogo é alugado
        }
    }
}

// Função para mostrar quantos jogos estão alugados
function quantidadeAlugados() {
    let quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Jogos alugados no momento: ${quantidadeAlugados}`);
}

quantidadeAlugados(); // Aqui chamo a função quando a página carrega

// Na resolção do desafio da quantidade de alugados, adicionaram um document.addEventListener
// Acredito que da forma que fiz ficou mais simples (nem conheço sobre eventListener ainda hahaha), mas não sei se é a melhor abordagem