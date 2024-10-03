// Na aula, essas variáveis foram definidas dentro da função. Não sei dizer o que é melhor ou pior. Talvez faça sentido dentro da função, pois dessa forma
// o script só roda quando a função é acionada, e não no carregamento da página
let gameId = document.getElementById(parseInt('id')); // Aqui acabei usando o parseInt, mas na aula foi concatenado no id (`game-${id}`), o que acho que fica melhor
let botao = document.getElementsByTagName('a'); // Aqui usaram o querySelector pra pegar pela classe o botão. Facilita pois a variável não se torna um array
let imagem = document.getElementsByClassName('dashboard__item__img'); // Idem acima

function alterarStatus(gameId) {

    // A lógica do if ficou igual, a diferença foi que usaram a variável imagem na condição, e as variáveis não são arrays, por conta da diferença na coleta das variáveis
    if(botao[gameId - 1].classList.contains('dashboard__item__button--return')) { 
        botao[gameId - 1].classList.remove('dashboard__item__button--return');
        botao[gameId - 1].textContent = 'Alugar';
        imagem[gameId - 1].classList.remove('dashboard__item__img--rented');
    } else {
        botao[gameId - 1].classList.add('dashboard__item__button--return')
        botao[gameId - 1].textContent = 'Devolver';
        imagem[gameId - 1].classList.add('dashboard__item__img--rented');
    }
}